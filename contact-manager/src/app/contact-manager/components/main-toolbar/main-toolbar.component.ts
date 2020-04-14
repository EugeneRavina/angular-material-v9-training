import  {OnInit,Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})

export class MainToolbarComponent implements OnInit {
  dir:string = 'ltr';
  isDarkTheme:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() x: EventEmitter<any> = new EventEmitter();
  @Output() y: EventEmitter<any> = new EventEmitter();
  toggleDirection(){
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
    this.x.emit(this.dir);
  }
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
    this.y.emit(this.isDarkTheme);
  }
}
