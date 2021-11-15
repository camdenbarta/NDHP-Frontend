import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-img_vid',
  templateUrl: './img_vid.component.html',
  styleUrls: ['./img_vid.component.scss']
})
export class Img_VidComponent implements OnInit {
  image: any;
  video: any;
  filterTerm = 'Archive';

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.retrieveImg()
    this.retrieveVideo()
  }

  retrieveImg(): void {
    this.listService.getImage()
      .subscribe(
        data => {
          this.image = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveVideo(): void {
    this.listService.getVideo()
      .subscribe(
        data => {
          this.video = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
