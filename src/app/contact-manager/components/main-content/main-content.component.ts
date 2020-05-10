import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  users: User[] = [];
  public posts: Post[] = [];

  constructor(private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {

    //   let id = params['id'];
    //   if (!id) id = 1;
    //   this.users = null;

    //   this.userService.getuser().subscribe(( users: User) => {


    //     setTimeout(() => {
    //       this.users = this.userService.userById(id);
    //     }, 500);
    //   });
    // })

    // this.userService.getPost().subscribe((data: Post[]) => {
    //   this.posts = data;
    // });

    this.userService.getuser().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
    });

  }

  userImage(id: number): string {
    //  `https://robohash.org/${id}?300x300`
     return `https://randomuser.me/api/portraits/women/${id}.jpg`
  }

  doStuff() {
    console.log("click me")
  }
}
