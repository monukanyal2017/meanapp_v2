import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { DashboardComponent } from './components/dashboard.component';
import { LoginComponent } from './components/login.component';
//import { AuthGuard } from './_guards/index';
 
const appRoutes: Routes = [
   // { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent},
    { path: '', component: LoginComponent }
 
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];
 
//export const routing = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);