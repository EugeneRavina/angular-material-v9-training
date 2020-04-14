import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialogExampleComponent } from 'src/app/demo/mat-dialog-example/mat-dialog-example.component';
import { DialogData } from 'src/app/demo/mat-modals/mat-modals.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

export interface DialogNewData {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  username: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  users: any;
  user: any;
  name: string;
  email: string;
  website: string;
  company: string;
  selected: string;
  constructor(private userService: UserService,public dialog: MatDialog) { 
    this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers(){
    this.userService.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }
  userImage(id:number):string{
    return `http://randomuser.me/api/portraits/women/${id}.jpg`
  }

  openDialog(name:string,email:string,phone:string,username:string,website:string,company:string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {name: name,email: email,phone: phone,username:username,website: website,company:company}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.user = {};
      console.log('The dialog was closed');
    });
  }
  @Output() x: EventEmitter<any> = new EventEmitter();
  @Output() y: EventEmitter<any> = new EventEmitter();

  printBook(dir) {
    this.x.emit(dir);
  }
  printTheme(theme) {
    this.y.emit(theme);
  }
}
