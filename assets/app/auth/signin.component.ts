import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
	standalone: false,
})
export class SigninComponent {
	myForm: FormGroup;

	constructor(
		private authService: AuthService,
		private router: Router,
		public snackBar: MatSnackBar
	) {}

	onSubmit() {
		const user = new User(this.myForm.value.email, this.myForm.value.password);
		this.authService.signin(user).subscribe(
			(data) => {
				localStorage.setItem('token', data.token);
				localStorage.setItem('userId', data.userId);
				this.snackBar.open('Welcome to the KOI Web App! You are logged in.', 'Close', {
					duration: 3500,
					extraClasses: ['logged-in'],
				});
				this.router.navigateByUrl('/alltables');
			},
			(error) => {
				console.error('Signin error:', error);
				// Show error message to user
				this.snackBar.open(error.message || 'Login failed. Please try again.', 'Close', {
					duration: 5000,
					panelClass: ['error-snackbar'],
				});
			}
		);
		this.myForm.reset();
	}

	isLoggedIn() {
		return this.authService.isLoggedIn();
	}

	ngOnInit() {
		this.myForm = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(254)]),
			password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(128)]),
		});
	}
}
