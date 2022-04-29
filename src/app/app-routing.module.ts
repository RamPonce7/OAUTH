import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdGuard } from './utils/guards/user-guard.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [UserdGuard], },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule), canActivate: [UserdGuard], },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'forgot', loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
