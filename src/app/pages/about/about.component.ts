import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: any;
  image: any;
  video: any;
  filterTerm = 'About';
  order=['First','Second','Third','Fourth','Fifth','Sixth'];

  constructor(
    private listService: ListService
  ) { }
  
  ngOnInit(): void { 
    this.retrieveAbout();
    this.retrieveImg();
    this.retrieveVideo();
  }

  retrieveAbout(): void {
    this.listService.getAbout()
      .subscribe(
        data => {
          this.about = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
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