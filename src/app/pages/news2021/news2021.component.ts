import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-news2021',
  templateUrl: './news2021.component.html',
  styleUrls: ['./news2021.component.scss']
})
export class News2021Component implements OnInit {
  filterTerm='2021'
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
