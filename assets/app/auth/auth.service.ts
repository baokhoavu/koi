import type { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import type { RateLimitService } from '../core/rate-limit.service';
import type { SanitizationService } from '../core/sanitization.service';
import type { User } from './user.model';

@Injectable()
export class AuthService {
	// Mock credentials from .env
	private readonly MOCK_EMAIL = 'admin@koi.com';
	private readonly MOCK_PASSWORD = 'koi2025';

	constructor(
		_http: HttpClient,
		private rateLimitService: RateLimitService,
		private sanitizationService: SanitizationService
	) {}

	signup(user: User) {
		// Sanitize inputs
		const sanitizedEmail = this.sanitizationService.sanitizeEmail(user.email);
		const passwordValidation = this.sanitizationService.sanitizePassword(user.password);

		// Validate inputs
		if (!sanitizedEmail) {
			return throwError(() => new Error('Invalid email format'));
		}

		if (!passwordValidation.isValid) {
			return throwError(() => new Error(passwordValidation.errors.join(', ')));
		}

		// Check for malicious content
		if (this.sanitizationService.containsMaliciousContent(user.email)) {
			return throwError(() => new Error('Invalid input detected'));
		}

		// For static deployment, use mock signup
		return of({
			message: 'Mock signup successful',
			obj: { email: sanitizedEmail, firstName: 'Koi', lastName: 'Admin', _id: 'mock-user-12345' },
		});
	}

	signin(user: User) {
		// Sanitize inputs
		const sanitizedEmail = this.sanitizationService.sanitizeEmail(user.email);
		const passwordValidation = this.sanitizationService.sanitizePassword(user.password);

		// Check rate limiting
		const rateLimitKey = sanitizedEmail || 'anonymous';
		if (this.rateLimitService.isRateLimited(rateLimitKey)) {
			const timeUntilUnblocked = this.rateLimitService.getFormattedTimeUntilUnblocked(rateLimitKey);
			return throwError(
				() =>
					new Error(`Too many login attempts. Please try again in ${timeUntilUnblocked || 'a few minutes'}.`)
			);
		}

		// Validate inputs
		if (!sanitizedEmail) {
			this.rateLimitService.recordAttempt(rateLimitKey);
			return throwError(() => new Error('Invalid email format'));
		}

		if (!passwordValidation.isValid) {
			this.rateLimitService.recordAttempt(rateLimitKey);
			return throwError(() => new Error('Invalid credentials'));
		}

		// Check for malicious content
		if (this.sanitizationService.containsMaliciousContent(user.email)) {
			this.rateLimitService.recordAttempt(rateLimitKey);
			return throwError(() => new Error('Invalid input detected'));
		}

		// Add artificial delay to prevent timing attacks
		return of(null).pipe(
			delay(Math.random() * 200 + 100), // 100-300ms random delay
			map(() => {
				// Check mock credentials
				if (sanitizedEmail === this.MOCK_EMAIL && passwordValidation.value === this.MOCK_PASSWORD) {
					// Record successful login
					this.rateLimitService.recordSuccess(rateLimitKey);

					return {
						token: `mock-jwt-token-${Date.now()}`,
						userId: 'mock-user-12345',
						message: 'Successfully logged in',
					};
				} else {
					// Record failed attempt
					this.rateLimitService.recordAttempt(rateLimitKey);

					const remaining = this.rateLimitService.getRemainingAttempts(rateLimitKey);
					const errorMessage =
						remaining > 0
							? `Invalid credentials. ${remaining} attempt${remaining !== 1 ? 's' : ''} remaining.`
							: 'Too many failed attempts. Account temporarily locked.';

					throw new Error(errorMessage);
				}
			})
		);
	}

	logout() {
		localStorage.clear();
	}

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}

	getRemainingAttempts(email: string): number {
		const sanitizedEmail = this.sanitizationService.sanitizeEmail(email);
		return this.rateLimitService.getRemainingAttempts(sanitizedEmail || 'anonymous');
	}
}
