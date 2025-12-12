import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environment';
import type { User } from './user.model';

@Injectable()
export class AuthService {
	// Mock credentials from .env
	private readonly MOCK_EMAIL = 'admin@koi.com';
	private readonly MOCK_PASSWORD = 'koi2025';

	constructor(private http: HttpClient) {}

	signup(user: User) {
		// For static deployment, use mock signup
		return of({
			message: 'Mock signup successful',
			obj: { email: user.email, firstName: 'Koi', lastName: 'Admin', _id: 'mock-user-12345' }
		});
	}

	signin(user: User) {
		// Check mock credentials
		if (user.email === this.MOCK_EMAIL && user.password === this.MOCK_PASSWORD) {
			return of({
				token: 'mock-jwt-token-' + Date.now(),
				userId: 'mock-user-12345',
				message: 'Successfully logged in'
			});
		} else {
			return throwError(() => new Error('Invalid email or password'));
		}
	}

	logout() {
		localStorage.clear();
	}

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}
}
