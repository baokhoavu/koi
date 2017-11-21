import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </div>
    `,
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
    constructor(private authService: AuthService, private router: Router, public snackBar: MatSnackBar) {}

    onLogout() {
        this.snackBar.open("Logged Out. See you later!", "Close", {
            duration: 2500,
            extraClasses: ['logged-out']
        });
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}