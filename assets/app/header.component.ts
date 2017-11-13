import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
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