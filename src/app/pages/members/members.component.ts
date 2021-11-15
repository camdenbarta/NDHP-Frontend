import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  member: any;
  filterTerm = "Meet the Members"
  image: any;
  video: any;
  order=['First','Second','Third','Fourth','Fifth','Sixth'];


  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.retrieveMembers();
    this.retrieveImg();
    this.retrieveVideo();
  }

   retrieveMembers(): void {
    this.listService.getMember()
    .subscribe(
      data => {
        this.member = data;
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
