import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-news2023',
  templateUrl: './news2023.component.html',
  styleUrls: ['./news2023.component.scss']
})
export class News2023Component implements OnInit {
  filterTerm = '2023'
  news: any;

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.retrieveNews();
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
