import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-policy-positions',
  templateUrl: './policy-positions.component.html',
  styleUrls: ['./policy-positions.component.scss']
})
export class PolicyPositionsComponent implements OnInit {
  policy: any;
  image: any;
  video: any;
  filterTerm = 'Policy Positions';
  order=['First','Second','Third','Fourth','Fifth','Sixth'];

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.retrievePolicy();
    this.retrieveImg();
    this.retrieveVideo();
  }

  retrievePolicy(): void {
    this.listService.getPolicy()
      .subscribe(
        data => {
          this.policy = data;
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
