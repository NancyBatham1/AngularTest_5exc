import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getAllData() {
    return this.httpClient.get<any>(
      'https://staging.latv.com/other/wp-json/v1/get-home-page-posts'
    );
  }
}
