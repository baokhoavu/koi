import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { DataService } from './data.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	standalone: false,
})
export class AppComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private dataService: DataService
	) {}

	ngOnInit() {
		// Pre-fetch data at app level so it's ready when navigating to alltables
		if (this.authService.isLoggedIn()) {
			this.dataService.fetchData();
		}
	}
}
