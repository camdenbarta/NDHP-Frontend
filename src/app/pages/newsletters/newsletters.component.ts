import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss']
})
export class NewslettersComponent implements OnInit {
  filterTerm = "News Letter"
  news: any;
  image: any;
  order=['First','Second','Third','Fourth','Fifth','Sixth'];
  
  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.retrieveNews()
  }

  retrieveNews(): void {
    this.listService.getNews()
      .subscribe(
        data => {
          this.news = data;
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

}
