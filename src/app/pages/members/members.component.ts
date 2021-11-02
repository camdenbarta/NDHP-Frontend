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
  order=['First','Second','Third','Fourth','Fifth','Sixth'];


  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.retrieveMembers();
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
