import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { routes } from './app.routes';
import { EqualValidator } from './reg/equal-validator';
import { HttpModule } from '@angular/http';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService, AuthenticationService, UserService } from './_services/index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    HomeComponent,
    EqualValidator,
    AlertComponent,
    InfoComponent
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
