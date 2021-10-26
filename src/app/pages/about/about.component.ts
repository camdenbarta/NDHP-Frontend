import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: any;

  constructor(
    private listService: ListService
  ) { }
  
  ngOnInit(): void { 
    this.retrieveAbout();
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

}
