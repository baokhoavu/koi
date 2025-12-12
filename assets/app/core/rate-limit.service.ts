import { Injectable } from '@angular/core';

interface RateLimitRecord {
	attempts: number;
	firstAttemptTime: number;
	blockedUntil: number | null;
}

@Injectable({
	providedIn: 'root',
})
export class RateLimitService {
	private readonly MAX_ATTEMPTS = 5;
	private readonly WINDOW_MS = 15 * 60 * 1000; // 15 minutes
	private readonly BLOCK_DURATION_MS = 30 * 60 * 1000; // 30 minutes
	private readonly STORAGE_KEY = 'auth_rate_limit';

	/**
	 * Check if the user/IP is rate limited
	 */
	isRateLimited(identifier: string = 'default'): boolean {
		const record = this.getRecord(identifier);

		if (!record) return false;

		// Check if currently blocked
		if (record.blockedUntil && Date.now() < record.blockedUntil) {
			return true;
		}

		// Reset if window has passed
		if (Date.now() - record.firstAttemptTime > this.WINDOW_MS) {
			this.resetRecord(identifier);
			return false;
		}

		// Check if exceeded attempts
		return record.attempts >= this.MAX_ATTEMPTS;
	}

	/**
	 * Record a login attempt
	 */
	recordAttempt(identifier: string = 'default'): void {
		let record = this.getRecord(identifier);

		if (!record) {
			record = {
				attempts: 0,
				firstAttemptTime: Date.now(),
				blockedUntil: null,
			};
		}

		// Reset if window has passed
		if (Date.now() - record.firstAttemptTime > this.WINDOW_MS) {
			record = {
				attempts: 1,
				firstAttemptTime: Date.now(),
				blockedUntil: null,
			};
		} else {
			record.attempts++;
		}

		// Block if exceeded attempts
		if (record.attempts >= this.MAX_ATTEMPTS) {
			record.blockedUntil = Date.now() + this.BLOCK_DURATION_MS;
		}

		this.saveRecord(identifier, record);
	}

	/**
	 * Record a successful login (resets the counter)
	 */
	recordSuccess(identifier: string = 'default'): void {
		this.resetRecord(identifier);
	}

	/**
	 * Get remaining attempts before rate limit
	 */
	getRemainingAttempts(identifier: string = 'default'): number {
		const record = this.getRecord(identifier);

		if (!record) return this.MAX_ATTEMPTS;

		if (Date.now() - record.firstAttemptTime > this.WINDOW_MS) {
			return this.MAX_ATTEMPTS;
		}

		return Math.max(0, this.MAX_ATTEMPTS - record.attempts);
	}

	/**
	 * Get time until unblocked (in milliseconds)
	 */
	getTimeUntilUnblocked(identifier: string = 'default'): number {
		const record = this.getRecord(identifier);

		if (!record || !record.blockedUntil) return 0;

		const timeRemaining = record.blockedUntil - Date.now();
		return Math.max(0, timeRemaining);
	}

	/**
	 * Get human-readable time until unblocked
	 */
	getFormattedTimeUntilUnblocked(identifier: string = 'default'): string {
		const ms = this.getTimeUntilUnblocked(identifier);

		if (ms === 0) return '';

		const minutes = Math.ceil(ms / 60000);

		if (minutes < 60) {
			return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
		}

		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;

		if (remainingMinutes === 0) {
			return `${hours} hour${hours !== 1 ? 's' : ''}`;
		}

		return `${hours} hour${hours !== 1 ? 's' : ''} and ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
	}

	/**
	 * Clear all rate limit records (for testing/admin purposes)
	 */
	clearAll(): void {
		localStorage.removeItem(this.STORAGE_KEY);
	}

	private getRecord(identifier: string): RateLimitRecord | null {
		try {
			const data = localStorage.getItem(this.STORAGE_KEY);
			if (!data) return null;

			const records = JSON.parse(data);
			return records[identifier] || null;
		} catch {
			return null;
		}
	}

	private saveRecord(identifier: string, record: RateLimitRecord): void {
		try {
			const data = localStorage.getItem(this.STORAGE_KEY);
			const records = data ? JSON.parse(data) : {};

			records[identifier] = record;
			localStorage.setItem(this.STORAGE_KEY, JSON.stringify(records));
		} catch {
			// Fail silently if localStorage is full
		}
	}

	private resetRecord(identifier: string): void {
		try {
			const data = localStorage.getItem(this.STORAGE_KEY);
			if (!data) return;

			const records = JSON.parse(data);
			delete records[identifier];

			if (Object.keys(records).length === 0) {
				localStorage.removeItem(this.STORAGE_KEY);
			} else {
				localStorage.setItem(this.STORAGE_KEY, JSON.stringify(records));
			}
		} catch {
			// Fail silently
		}
	}
}
