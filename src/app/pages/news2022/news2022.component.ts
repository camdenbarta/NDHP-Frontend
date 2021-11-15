import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-news2022',
  templateUrl: './news2022.component.html',
  styleUrls: ['./news2022.component.scss']
})
export class News2022Component implements OnInit {
  filterTerm = '2022'
  news: any;

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

}
