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
				// this.snackBar.dismiss();
				this.router.navigateByUrl('/alltables');
			},
			(error) => console.error('Signin error:', error)
		);
		this.myForm.reset();
	}

	isLoggedIn() {
		return this.authService.isLoggedIn();
	}

	ngOnInit() {
		this.myForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.pattern(
					"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
				),
			]),
			password: new FormControl(null, Validators.required),
		});
	}
}
