import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-img_vid',
  templateUrl: './img_vid.component.html',
  styleUrls: ['./img_vid.component.scss']
})
export class Img_VidComponent implements OnInit {
  image: any;
  filterTerm = 'Archive';

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.retrieveImg()
  }

  retrieveImg(): void {
    this.listService.getImage_Video()
      .subscribe(
        data => {
          this.image = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
