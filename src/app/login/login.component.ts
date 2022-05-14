import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: any = '';
  password: any = '';
  constructor(private service: LoginService) {}

  ngOnInit(): void {}

  verifylogin() {
    this.service.verifylogin(this.username, this.password).subscribe((res) => {
      if (res.status == true) {
        localStorage.setItem('ubihrm_user_logged_in', 'true');
        localStorage.setItem('ubihrm_org_name', res.data.ubihrm_org_name);
      }
    });
  }

  //   onsignin() {
  //     this.service.onsignin(this.Usermodel).subscribe((res) => {
  //       if (res.status == true) {
  //         localStorage.setItem('ubihrm_user_logged_in', 'true');
  //         localStorage.setItem('ubihrm_org_name', res.data.ubihrm_org_name);
  //         localStorage.setItem(
  //           'ubihrm_currencycode',
  //           res.data.ubihrm_currencycode
  //         );

  //       }
  //     });
  // }
}
