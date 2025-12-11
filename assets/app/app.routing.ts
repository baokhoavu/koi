import { RouterModule, type Routes } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth.routes';
import { AuthenticationComponent } from './auth/authentication.component';
import { SigninComponent } from './auth/signin.component';
import { MessagesComponent } from './messages/messages.component';
import { AllTablesComponent } from './tables/alltables.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{ path: 'messages', component: MessagesComponent },
	{ path: 'alltables', component: AllTablesComponent },
	{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
	{ path: 'signin', component: SigninComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
