import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Component({
	selector: 'app-logout',
	template: `
		<div class="col-md-8 col-md-offset-2">
			<button mat-raised-button color="warn" (click)="onLogout()">Logout</button>
		</div>
	`,
	styleUrls: ['./logout.component.scss'],
	standalone: false
})
export class LogoutComponent {
	constructor(
		private authService: AuthService,
		private router: Router,
		public snackBar: MatSnackBar
	) {}

	onLogout() {
		this.authService.logout();
		this.router.navigate(['/auth', 'signin']);
		this.snackBar.open('Logged Out. See you later!', 'Close', {
			duration: 2500,
			extraClasses: ['logged-out']
		});
	}
}

