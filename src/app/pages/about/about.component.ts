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
  filterTerm = 'About';
  order=['First','Second','Third','Fourth','Fifth','Sixth'];

  constructor(
    private listService: ListService
  ) { }
  
  ngOnInit(): void { 
    this.retrieveAbout();
    this.retrieveImg();
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

/*
  getAbout1(): void {
    this.listService.about1()
      .subscribe(
        data => {
          this.about1 = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getAbout2(): void {
    this.listService.about2()
      .subscribe(
        data => {
          this.about2 = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getAbout3(): void {
    this.listService.about3()
      .subscribe(
        data3 => {
          this.about3 = data3;
          console.log(data3);
        },
        error => {
          console.log(error);
        });
  }

  getAbout4(): void {
    this.listService.about4()
      .subscribe(
        data4 => {
          this.about4 = data4;
          console.log(data4);
        },
        error => {
          console.log(error);
        });
  }

  getAbout5(): void {
    this.listService.about5()
      .subscribe(
        data5 => {
          this.about5 = data5;
          console.log(data5);
        },
        error => {
          console.log(error);
        });
  }

  getAbout6(): void {
    this.listService.about6()
      .subscribe(
        data6 => {
          this.about6 = data6;
          console.log(data6);
        },
        error => {
          console.log(error);
        });
  }
  */
}