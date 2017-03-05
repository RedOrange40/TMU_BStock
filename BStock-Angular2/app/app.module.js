"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var login_component_1 = require('./login/login.component');
var reg_component_1 = require('./reg/reg.component');
var home_component_1 = require('./home/home.component');
var info_component_1 = require('./info/info.component');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var equal_validator_1 = require('./reg/equal-validator');
var http_1 = require('@angular/http');
var fake_backend_1 = require('./_helpers/fake-backend');
var testing_1 = require('@angular/http/testing');
var http_2 = require('@angular/http');
var index_1 = require('./_directives/index');
var auth_guard_1 = require('./_guards/auth.guard');
var index_2 = require('./_services/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                reg_component_1.RegComponent,
                home_component_1.HomeComponent,
                equal_validator_1.EqualValidator,
                index_1.AlertComponent,
                info_component_1.InfoComponent
            ],
            providers: [
                auth_guard_1.AuthGuard,
                index_2.AlertService,
                index_2.AuthenticationService,
                index_2.UserService,
                // providers used to create fake backend
                fake_backend_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map