import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './user.model';
import { environment } from '../environment';

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) {}

	signup(user: User) {
		const body = JSON.stringify(user);
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this.http.post<any>(environment.apiUrl + '/user', body, { headers: headers }).pipe(
			map(response => response),
			catchError(error => throwError(() => error))
		);
	}

	signin(user: User) {
		const body = JSON.stringify(user);
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this.http.post<any>(environment.apiUrl + '/user/signin', body, { headers: headers }).pipe(
			map(response => response),
			catchError(error => throwError(() => error))
		);
	}

	logout() {
		localStorage.clear();
	}

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}
}
