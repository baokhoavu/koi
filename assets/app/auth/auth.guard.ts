import { Injectable } from '@angular/core';
import type { CanActivate, Router } from '@angular/router';
import type { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	canActivate(): boolean {
		if (this.authService.isLoggedIn()) {
			return true;
		} else {
			this.router.navigate(['/signin']);
			return false;
		}
	}
}
