import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['/auth']">Sign Up / Sign In</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['/alltables']">Home</a></li>
                    <li *ngIf="isLoggedIn()"><a (click)="onLogout()">Logout</a></li>
                </ul>
            </nav>
        </header>
    `
//    template: `
//        <header class="row">
//            <nav class="col-md-8 col-md-offset-2">
//                <ul class="nav nav-pills">
//                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
//                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
//                    <li routerLinkActive="active"><a [routerLink]="['/alltables']">Data</a></li>
//                </ul>
//            </nav>
//        </header>
//    `
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