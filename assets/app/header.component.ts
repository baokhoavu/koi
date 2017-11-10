import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    template: `
                    <header class="row">
                        <nav class="col-md-8 col-md-offset-2">
                            <ul class="nav nav-pills">
                                <a *ngIf="!isLoggedIn()" class="navbar-brand" href="/"><img src="/img/koi_logo_v2.svg" alt="Koi Logo"> version: 1.0</a>
                                <a *ngIf="isLoggedIn()" class="navbar-brand" href="/alltables"><img src="/img/koi_logo_v2.svg" alt="Koi Logo"> version: 1.0</a>
                                <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['/auth']">Sign Up / Sign In</a></li>
                                <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['/alltables']">Home</a></li>
                                <li *ngIf="isLoggedIn()"><a (click)="onLogout()">Logout</a></li>
                            </ul>
                        </nav>
                    </header>
              `,
    styles: [`
            .navbar-brand img { width: 80px; 
                                margin: 0 auto; }
            .navbar-brand { height: auto; 
                            display: block; 
                            width: 100%; 
                            text-align: center; 
                            font-size: 11px;
                            color: #969696; }
            `]
})
export class HeaderComponent {
    constructor(private authService: AuthService, private router: Router) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}