import { Component } from '@angular/core';
import type { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	standalone: false,
})
export class FooterComponent {
	constructor(public auth: AuthService) {}
}
