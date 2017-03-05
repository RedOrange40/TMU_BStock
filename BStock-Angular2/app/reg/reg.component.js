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
var router_1 = require('@angular/router');
var index_1 = require('../_services/index');
var user_1 = require('../_models/user');
var http_1 = require('@angular/http');
var RegComponent = (function () {
    function RegComponent(http, router, userService, alertService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.genders = [{ gender: '男性' }, { gender: '女性' }];
        this.selectedGender = this.genders[0];
    }
    RegComponent.prototype.onChangeGender = function (newGender) {
        console.log(newGender);
        this.selectedGender = newGender;
    };
    RegComponent.prototype.register = function (value) {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (res) {
            _this.alertService.success('註冊成功', true);
            _this.router.navigate(['/login']);
            _this.user = new user_1.User(value.account, value.name, value.password);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
        alert(this.user);
        this.http.post('http://localhost:3000/reg', JSON.stringify(this.user))
            .subscribe(function (err) { return console.log(err); });
    };
    RegComponent.prototype.addPerson = function (account, name, password) {
        this.http.post('http://localhost:3001/reg', { account: account, name: name, password: password })
            .map(function (res) { return res.json(); });
    };
    RegComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reg',
            templateUrl: 'reg.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, index_1.UserService, index_1.AlertService])
    ], RegComponent);
    return RegComponent;
}());
exports.RegComponent = RegComponent;
//# sourceMappingURL=reg.component.js.map