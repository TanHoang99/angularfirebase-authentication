import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';


import { AuthGuard } from "../../shared/guard/auth.guard";
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { DetailComponent } from '../../components/detail/detail.component';

import { ActionComponent } from '../../components/action/action.component';
import { HeatComponent } from '../../components/heat/heat.component';

import { NotesComponent } from '../../components/notes/notes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'project-detail', component: DetailComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

  { path: 'action', component: ActionComponent, canActivate: [AuthGuard] },
  { path: 'heat', component: HeatComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
