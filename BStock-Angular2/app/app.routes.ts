import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { InfoComponent } from './info/info.component';
import { AppComponent }  from './app.component';
import { AuthGuard } from './_guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'reg', component: RegComponent },
    { path: 'info', component: InfoComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
