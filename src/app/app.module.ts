import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module

import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule} from '@angular/fire/database';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DetailComponent } from './components/detail/detail.component';
import { ActionComponent } from './components/action/action.component';
import { AdminSiderBarComponent } from './shared/admin-sider-bar/admin-sider-bar.component';
import { AdminNavBarComponent } from './shared/admin-nav-bar/admin-nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeatComponent } from './components/heat/heat.component';
import { NotesComponent } from './components/notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    AboutUsComponent,
    DetailComponent,
    ActionComponent,
    AdminSiderBarComponent,
    AdminNavBarComponent,
    FooterComponent,
    HeatComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }