import { ChangeDetectorRef, Component, OnDestroy, Inject, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from './user.service'
import { User } from './user';
import { Ticket } from './ticket';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'contact-manager';
  mobileQuery: MediaQueryList;
  value = 'Clear me';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  users: User[]

  animal: string;
  name: string;

  cities: Object[] = [
    {name: 'Manila'},
    {name: 'Quezon'},
    {name: 'Pasig'}
  ]

  countries: Object[] = [
    {name: 'Philippines'},
    {name: 'USA'},
    {name: 'Japan'}
  ]
  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  displayedColumns: string[] = ['position', 'name', 'weight', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  todo : Ticket[] = [
    { ticketId: 'KNBAN-0001',title:'Setup Server', issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0002',title:'Database Setup',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0003',title:'Repository Setup',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
  ];

  inDev = [
    { ticketId: 'KNBAN-0004',title:'Login Design Module',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0005',title:'Support NEHO-00123',issueType: { id: 1, name: 'Task', icon: 'bug_report', color: 'warn'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0006',title:'File Repository',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
  ];

  inTest = [
    { ticketId: 'KNBAN-00010',title:'Signup Design Module',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-00011',title:'Refund Planning',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-00012',title:'Regression Testing',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-00013',title:'Support NEHO-0015',issueType: { id: 1, name: 'Task', icon: 'bug_report', color: 'warn'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
  ];

  done = [
    { ticketId: 'KNBAN-0007',title:'Setup Server',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0008',title:'Database Setup',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0009',title:'Repository Setup',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
  ];

  @ViewChild(MatPaginator, {static: true}, ) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _formBuilder: FormBuilder, public dialog: MatDialog, private userService: UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      city: '',
      zip: '',
      country: ''
    });
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.userService.getuser().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
    })
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  userImage(id: number): string {
 
    return `https://randomuser.me/api/portraits/women/${id}.jpg`
 }
 drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  cities: Object[] = [
    {name: 'Manila'},
    {name: 'Quezon'},
    {name: 'Pasig'}
  ]

  countries: Object[] = [
    {name: 'Philippines'},
    {name: 'USA'},
    {name: 'Japan'}
  ]

  

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'VolleyBall', weight: 1.0079, price: 2},
  {position: 2, name: 'BasketBall', weight: 4.0026, price: 3},
  {position: 3, name: 'BaseBall', weight: 6.941, price: 10},
  {position: 4, name: 'BaseBall Bat', weight: 9.0122, price: 21},
  {position: 5, name: 'BaseBall', weight: 6.941, price: 10},
  {position: 6, name: 'BaseBall Bat', weight: 9.0122, price: 21},
  {position: 7, name: 'Badminton Racket', weight: 4.0067, price: 13},
  {position: 8, name: 'VolleyBall', weight: 1.0079, price: 2},
  {position: 9, name: 'BasketBall', weight: 4.0026, price: 3},
  {position: 10, name: 'Golf Ball', weight: 1.1797, price: 5},
  {position: 11, name: 'Golf Club', weight: 7.9897, price: 15},
  {position: 12, name: 'BasketBall', weight: 4.0026, price: 3},
  {position: 13, name: 'Badminton Racket', weight: 4.0067, price: 13},
  {position: 14, name: 'BaseBall Bat', weight: 9.0122, price: 21},
  {position: 15, name: 'Badminton Racket', weight: 4.0067, price: 13}
];