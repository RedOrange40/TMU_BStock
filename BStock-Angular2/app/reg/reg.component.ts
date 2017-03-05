import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import { Reg }    from './reg';
import { User } from '../_models/user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'reg',
  templateUrl: 'reg.component.html'
})

  export class RegComponent {
      model: any = {};
      loading = false;
      user;

      constructor(
          public http: Http,
          private router: Router,
          private userService: UserService,
          private alertService: AlertService) { }

      genders = [{gender: '男性'}, {gender: '女性'}];
      selectedGender = this.genders[0];
      onChangeGender(newGender) {
        console.log(newGender);
        this.selectedGender = newGender;
      }

      register(value) {
          this.loading = true;
          this.userService.create(this.model)
              .subscribe(
                  res => {
                      this.alertService.success('註冊成功', true);
                      this.router.navigate(['/login']);
                      this.user = new User(value.account, value.name, value.password);
                  },
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                  });
                  alert(this.user)
                  this.http.post('http://localhost:3000/reg',
      JSON.stringify(this.user))
      .subscribe(err => console.log(err));
      }
      addPerson(account, name, password) {
          this.http.post('http://localhost:3001/reg', {account, name, password})
            .map(res => res.json())
        }
  }
