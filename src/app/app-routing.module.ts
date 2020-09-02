import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  { path: '', component: PagesComponent,children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  ] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
