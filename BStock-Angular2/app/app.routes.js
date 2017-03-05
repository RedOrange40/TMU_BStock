"use strict";
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var reg_component_1 = require('./reg/reg.component');
var info_component_1 = require('./info/info.component');
var auth_guard_1 = require('./_guards/auth.guard');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'reg', component: reg_component_1.RegComponent },
    { path: 'info', component: info_component_1.InfoComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map