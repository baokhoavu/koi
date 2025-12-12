import { Injectable } from '@angular/core';
import type { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root',
})
export class SanitizationService {
	constructor(private sanitizer: DomSanitizer) {}

	/**
	 * Sanitize HTML content to prevent XSS attacks
	 */
	sanitizeHtml(html: string): SafeHtml {
		return this.sanitizer.sanitize(1, html) || ''; // SecurityContext.HTML = 1
	}

	/**
	 * Remove all HTML tags from input
	 */
	stripHtml(input: string): string {
		if (!input) return '';
		return input.replace(/<[^>]*>/g, '');
	}

	/**
	 * Sanitize string input - removes potentially dangerous characters
	 */
	sanitizeInput(input: string): string {
		if (!input) return '';

		// Remove script tags and their content
		let sanitized = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

		// Remove event handlers
		sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');

		// Remove javascript: protocol
		sanitized = sanitized.replace(/javascript:/gi, '');

		// Remove data: protocol (except for images which are handled separately)
		sanitized = sanitized.replace(/data:(?!image)/gi, '');

		return sanitized.trim();
	}

	/**
	 * Validate and sanitize email
	 */
	sanitizeEmail(email: string): string {
		if (!email) return '';

		const sanitized = email.toLowerCase().trim();

		// Basic email validation pattern
		const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

		return emailPattern.test(sanitized) ? sanitized : '';
	}

	/**
	 * Validate password strength and sanitize
	 */
	sanitizePassword(password: string): { value: string; isValid: boolean; errors: string[] } {
		const errors: string[] = [];

		if (!password) {
			errors.push('Password is required');
			return { value: '', isValid: false, errors };
		}

		// Remove null bytes and control characters
		// biome-ignore lint/suspicious/noControlCharactersInRegex: intentional control char detection
		const sanitized = password.replace(/[\x00-\x1F\x7F]/g, '');

		// Validate length
		if (sanitized.length < 8) {
			errors.push('Password must be at least 8 characters long');
		}

		if (sanitized.length > 128) {
			errors.push('Password must be less than 128 characters');
		}

		return {
			value: sanitized,
			isValid: errors.length === 0,
			errors,
		};
	}

	/**
	 * Sanitize message/text content
	 */
	sanitizeTextContent(text: string, maxLength: number = 1000): string {
		if (!text) return '';

		// Remove dangerous content
		let sanitized = this.sanitizeInput(text);

		// Enforce length limit
		sanitized = sanitized.substring(0, maxLength);

		return sanitized;
	}

	/**
	 * Validate URL and prevent javascript/data protocols
	 */
	sanitizeUrl(url: string): string {
		if (!url) return '';

		const sanitized = url.trim();

		// Only allow http, https protocols
		if (!/^https?:\/\//i.test(sanitized)) {
			return '';
		}

		return sanitized;
	}

	/**
	 * Check if string contains potentially malicious content
	 */
	containsMaliciousContent(input: string): boolean {
		if (!input) return false;

		const maliciousPatterns = [
			/<script/i,
			/javascript:/i,
			/on\w+\s*=/i,
			/<iframe/i,
			/<object/i,
			/<embed/i,
			/eval\(/i,
			/expression\(/i,
		];

		return maliciousPatterns.some((pattern) => pattern.test(input));
	}
}
