// Angular Core Modules

import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserModule } from '@angular/platform-browser';
// Material Design and Animation Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbertaComponent } from './alberta/alberta.component';
// Global Components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
// Services
import { AuthService } from './auth/auth.service';
import { AuthenticationComponent } from './auth/authentication.component';
// Login/Logout/Signup Components
import { LogoutComponent } from './auth/logout.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { BrisbaneComponent } from './brisbane/brisbane.component';
import { DataService } from './data.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header.component';
import { MelbourneComponent } from './melbourne/melbourne.component';
import { MessageComponent } from './messages/message.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MontrealComponent } from './montreal/montreal.component';
import { OWTorontoComponent } from './ow-toronto/ow-toronto.component';
import { PerthComponent } from './perth/perth.component';
// Table Components
import { AllTablesComponent } from './tables/alltables.component';
import { TorontoComponent } from './toronto/toronto.component';
import { VancouverComponent } from './vancouver/vancouver.component';

@NgModule({
	exports: [
		CdkTableModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
	],
})
export class AngularMaterialModule {}

@NgModule({
	declarations: [
		AppComponent,
		MessageComponent,
		MessageListComponent,
		MessageInputComponent,
		MessagesComponent,
		AuthenticationComponent,
		HeaderComponent,
		LogoutComponent,
		SignupComponent,
		SigninComponent,
		AllTablesComponent,
		TorontoComponent,
		AlbertaComponent,
		MontrealComponent,
		VancouverComponent,
		PerthComponent,
		OWTorontoComponent,
		MelbourneComponent,
		BrisbaneComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		routing,
		ReactiveFormsModule,
		MatMomentDateModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AngularMaterialModule,
	],
	providers: [AuthService, DataService],
	bootstrap: [AppComponent],
})
export class AppModule {}
