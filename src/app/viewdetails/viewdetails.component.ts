import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css'],
})
export class ViewdetailsComponent implements OnInit {
  constructor(private service: HomeService, private route: ActivatedRoute) {}
  dataArray: any = [];
  detailArray: any = [];
  id: any;
  alldata: any;
  title: any;
  imgUrl: any;
  alt: any = '';
  post_content: any = '';
  category: any = '';
  author_name: any = '';
  publish_date: any = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.alldata = this.service.getAllData().subscribe((data) => {
      if (data.message == 'Success') {
        this.dataArray = data.data;
      }

      for (var i = 0; i < this.dataArray.length; i++) {
        if (this.dataArray[i].ID == this.id) {
          this.detailArray = this.dataArray[i];
          this.title = this.detailArray.post_title;
          this.imgUrl = this.detailArray.post_image.custom_image_url;
          this.alt = this.detailArray.post_image.alt;
          this.post_content = this.detailArray.post_content;
          this.author_name = this.detailArray.author_name;
          this.publish_date = this.detailArray.publish_date;
          this.category = this.detailArray.post_category[0].cat_name;

          console.log(this.detailArray.post_image.custom_image_url);
        }
      }

      console.log(this.detailArray);
    });
  }
  ngOndestroy(): void {
    this.alldata.unsubcribe();
  }
}
