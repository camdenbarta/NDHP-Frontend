import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeaderComponent implements OnInit {
  image: any;

  constructor(
    private listService: ListService,
  ) { }


  ngOnInit(): void {
    this.retrieveCarousel();
  }

  retrieveCarousel(): void {
    this.listService.getCarousel()
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
