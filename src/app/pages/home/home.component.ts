import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image: any;
  filterTerm="Home";

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.retrieveImg();
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
