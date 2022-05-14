import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}
  private url = 'https://staging.latv.com/other/wp-json/v1/get-home-page-posts';

  getAllData() {
    return this.httpClient.get<any>(this.url);
  }
  getAllDataBypageno(page: number) {
    return this.httpClient.get<any>(this.url + 'page_no=' + page);
  }
}
