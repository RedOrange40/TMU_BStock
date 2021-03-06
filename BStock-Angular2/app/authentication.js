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
// authentication.ts
var core_1 = require('@angular/core');
//import { TokenService } from '../node_modules/angular2-auth';
//import { Http } from '@angular/http';
var Authentication = (function () {
    function Authentication() {
        this.token = localStorage.getItem('token');
    }
    Authentication.prototype.login = function (username, password) {
        /*
         * If we had a login api, we would have done something like this
    
        return this.http.post('/auth/login', JSON.stringify({
            username: username,
            password: password
          }), {
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
          .map((res : any) => {
            let data = res.json();
            this.token = data.token;
            localStorage.setItem('token', this.token);
          });
    
          for the purpose of this cookbook, we will juste simulate that
        */
        if (username === 'test' && password === 'test') {
            this.token = 'token';
            localStorage.setItem('token', this.token);
            return Rx.Observable.of('token');
        }
        return Rx.Observable.throw('authentication failure');
    };
    Authentication.prototype.logout = function () {
        /*
         * If we had a login api, we would have done something like this
    
        return this.http.get(this.config.serverUrl + '/auth/logout', {
          headers: new Headers({
            'x-security-token': this.token
          })
        })
        .map((res : any) => {
          this.token = undefined;
          localStorage.removeItem('token');
        });
         */
        this.token = undefined;
        localStorage.removeItem('token');
        return Rx.Observable.of(true);
    };
    Authentication = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Authentication);
    return Authentication;
}());
exports.Authentication = Authentication;
//# sourceMappingURL=authentication.js.map