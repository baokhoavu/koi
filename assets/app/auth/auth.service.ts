import { type HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environment';
import type { User } from './user.model';

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) {}

	signup(user: User) {
		const body = JSON.stringify(user);
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this.http.post<any>(`${environment.apiUrl}/user`, body, { headers: headers }).pipe(
			map((response) => response),
			catchError((error) => throwError(() => error))
		);
	}

	signin(user: User) {
		const body = JSON.stringify(user);
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this.http.post<any>(`${environment.apiUrl}/user/signin`, body, { headers: headers }).pipe(
			map((response) => response),
			catchError((error) => throwError(() => error))
		);
	}

	logout() {
		localStorage.clear();
	}

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}
}
