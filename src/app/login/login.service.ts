import { formatDate, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AppGlobals } from 'src/app/AppGlobals';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // ubihrm_user_id: any = localStorage.getItem('ubihrm_user_id');
  // ubihrm_org_id: any = localStorage.getItem('ubihrm_org_id');
  // ubihrm_dateformate1: any = localStorage.getItem('ubihrm_dateformate1');
  // org_perm_arr: any = localStorage.getItem('org_perm_arr');
  // user_perm_arr: any = localStorage.getItem('user_perm_arr');

  constructor(private httpClient: HttpClient) {}

  verifylogin(username: any, password: any) {
    var formData: FormData = new FormData();

    formData.append('Username', username);
    formData.append('Password', password);
    return this.httpClient.post<any>(
      AppGlobals.baseURL + 'MyController/testang',
      formData
    );
  }
  // oncreate(salaryhead: any) {
  //   var formData: FormData = new FormData();
  //   var dateformate = this.ubihrm_dateformate1.replace(/m/g, 'M');
  //   var latest_date: any = this.datepipe.transform(
  //     salaryhead.applieddate,
  //     dateformate
  //   );
  //   formData.append('ubihrm_user_id', this.ubihrm_user_id);
  //   formData.append('ubihrm_org_id', this.ubihrm_org_id);
  //   formData.append('salaryheadname', salaryhead.salaryheadname);
  //   formData.append('headcategoryid', salaryhead.headcategoryid);
  //   formData.append('headtype', salaryhead.headtype);
  //   formData.append('headcode', salaryhead.headcode);
  //   formData.append('description', salaryhead.description);
  //   formData.append('main', salaryhead.main);
  //   formData.append('sub', salaryhead.sub);
  //   formData.append('dateformat', this.ubihrm_dateformate1);
  //   formData.append('applieddate', latest_date);
  //   formData.append('org_perm_arr', this.org_perm_arr);
  //   formData.append('user_perm_arr', this.user_perm_arr);

  //   return this.httpClient.post<any>(
  //     AppGlobals.baseURL + 'salary/createsalaryhead',
  //     formData
  //   );
  // }
  // onupdate(salaryhead: any) {
  //   var formData: FormData = new FormData();
  //   var dateformate = this.ubihrm_dateformate1.replace(/m/g, 'M');
  //   var latest_date: any = this.datepipe.transform(
  //     salaryhead.applieddate,
  //     dateformate
  //   );

  //   formData.append('ubihrm_user_id', this.ubihrm_user_id);
  //   formData.append('ubihrm_org_id', this.ubihrm_org_id);
  //   formData.append('salaryheadid', salaryhead.salaryheadid);
  //   formData.append('salaryheadname', salaryhead.salaryheadname);
  //   formData.append('headcategoryid', salaryhead.headcategoryid);
  //   formData.append('headtype', salaryhead.headtype);
  //   formData.append('headcode', salaryhead.headcode);
  //   formData.append('description', salaryhead.description);
  //   formData.append('main', salaryhead.main);
  //   formData.append('sub', salaryhead.sub);
  //   formData.append('dateformat', this.ubihrm_dateformate1);
  //   formData.append('applieddate', latest_date);
  //   formData.append('org_perm_arr', this.org_perm_arr);
  //   formData.append('user_perm_arr', this.user_perm_arr);

  //   return this.httpClient.post<any>(
  //     AppGlobals.baseURL + 'salary/updatedesalaryhead',
  //     formData
  //   );
  // }
  // ondelete(salaryheadid: any) {
  //   var formData: FormData = new FormData();

  //   formData.append('ubihrm_user_id', this.ubihrm_user_id);
  //   formData.append('ubihrm_org_id', this.ubihrm_org_id);
  //   formData.append('org_perm_arr', this.org_perm_arr);
  //   formData.append('user_perm_arr', this.user_perm_arr);

  //   return this.httpClient.post<any>(
  //     AppGlobals.baseURL + 'salary/deletesalaryhead/' + salaryheadid,
  //     formData
  //   );
  // }
  // updateotherhead(salaryhead: any) {
  //   var formData: FormData = new FormData();
  //   console.log(salaryhead);
  //   formData.append('ubihrm_user_id', this.ubihrm_user_id);
  //   formData.append('ubihrm_org_id', this.ubihrm_org_id);
  //   formData.append('org_perm_arr', this.org_perm_arr);
  //   formData.append('user_perm_arr', this.user_perm_arr);
  //   formData.append('salaryheadid', salaryhead.salaryheadid);
  //   formData.append('salaryheadname', salaryhead.salaryheadname);
  //   formData.append('salaryheadcode', salaryhead.salaryheadcode);
  //   formData.append('sub', salaryhead.sub);

  //   return this.httpClient.post<any>(
  //     AppGlobals.baseURL + 'salary/updatedesalaryotherhead',
  //     formData
  //   );
  // }
  // salaryheadcategory() {
  //   var formData: FormData = new FormData();

  //   formData.append('ubihrm_user_id', this.ubihrm_user_id);
  //   formData.append('ubihrm_org_id', this.ubihrm_org_id);
  //   formData.append('typeid', '4');
  //   formData.append('org_perm_arr', this.org_perm_arr);
  //   formData.append('user_perm_arr', this.user_perm_arr);

  //   return this.httpClient.post<any>(
  //     AppGlobals.baseURL + 'setup/getallcategory',
  //     formData
  //   );
  // }
  // onfetchsalaryhead(salaryheadid: any) {
  //   var formData: FormData = new FormData();

  //   formData.append('ubihrm_user_id', this.ubihrm_user_id);
  //   formData.append('ubihrm_org_id', this.ubihrm_org_id);
  //   formData.append('salaryheadid', salaryheadid);
  //   formData.append('org_perm_arr', this.org_perm_arr);
  //   formData.append('user_perm_arr', this.user_perm_arr);

  //   return this.httpClient.post<any>(
  //     AppGlobals.baseURL + 'salary/getasalaryhead',
  //     formData
  //   );
  // }
  // changeheadstatus(salaryheadid: any) {
  //   var formData: FormData = new FormData();

  //   formData.append('ubihrm_user_id', this.ubihrm_user_id);
  //   formData.append('ubihrm_org_id', this.ubihrm_org_id);
  //   formData.append('org_perm_arr', this.org_perm_arr);
  //   formData.append('user_perm_arr', this.user_perm_arr);

  //   return this.httpClient.post<any>(
  //     AppGlobals.baseURL + 'salary/changeheadstatus/' + salaryheadid,
  //     formData
  //   );
  // }
  // onfetchotherhead(salaryheadid: any) {
  //   var formData: FormData = new FormData();

  //   formData.append('ubihrm_user_id', this.ubihrm_user_id);
  //   formData.append('ubihrm_org_id', this.ubihrm_org_id);
  //   formData.append('salaryheadid', salaryheadid);
  //   formData.append('org_perm_arr', this.org_perm_arr);
  //   formData.append('user_perm_arr', this.user_perm_arr);

  //   return this.httpClient.post<any>(
  //     AppGlobals.baseURL + 'salary/getaotherhead',
  //     formData
  //   );
  // }
}
