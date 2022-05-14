import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: HomeService) {}

  page: any = 1;
  dataArray: any = [];
  alldata: any;

  ngOnInit(): void {
    // this.alldata = this.service
    //   .getAllDataBypageno(this.page)
    //   .subscribe((data) => {
    //     if (data.message == 'Success') {
    //       this.dataArray = data.data;

    //     }
    //   });

    this.alldata = this.service.getAllData().subscribe((data) => {
      if (data.message == 'Success') {
        this.dataArray = data.data;
      }
    });
  }

  ngOndestroy(): void {
    this.alldata.unsubcribe();
  }
}
