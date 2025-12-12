import { Component, type OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SanitizationService } from '../core/sanitization.service';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
	standalone: false,
})
export class SignupComponent implements OnInit {
	myForm: FormGroup;

	constructor(
		private authService: AuthService,
		private sanitizationService: SanitizationService,
		public snackBar: MatSnackBar
	) {}

	onSubmit() {
		// Sanitize name inputs
		const firstName = this.sanitizationService.sanitizeInput(this.myForm.value.firstName);
		const lastName = this.sanitizationService.sanitizeInput(this.myForm.value.lastName);

		// Validate names
		if (!firstName || !lastName) {
			this.snackBar.open('Invalid name format', 'Close', {
				duration: 3000,
				panelClass: ['error-snackbar'],
			});
			return;
		}

		const user = new User(this.myForm.value.email, this.myForm.value.password, firstName, lastName);
		this.authService.signup(user).subscribe(
			(_data) => {
				this.snackBar.open('Account created successfully!', 'Close', {
					duration: 3000,
				});
			},
			(error) => {
				console.error('Signup error:', error);
				this.snackBar.open(error.message || 'Signup failed. Please try again.', 'Close', {
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
			firstName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			lastName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(254)]),
			password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(128)]),
		});
	}
}
