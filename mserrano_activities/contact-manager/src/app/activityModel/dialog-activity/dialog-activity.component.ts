import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogPersonData } from '../model-activity/model-activity.component';

interface City {
  value : string;
  viewValue : string;
}

interface Country {
  value : string;
  viewValue : string;
}

@Component({
  selector: 'app-dialog-activity',
  templateUrl: './dialog-activity.component.html',
  styleUrls: ['./dialog-activity.component.scss']
})
export class DialogActivityComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<DialogActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPersonData) { }

  cities: City[] = [
    {value: 'lipa-0', viewValue: 'Lipa'},
    {value: 'tambo-1', viewValue: 'Tambo'},
    {value: 'tangway-2', viewValue: 'Tangway'}
  ];

  countries: Country[] = [
    {value: 'philippines-0', viewValue: 'Philippines'},
    {value: 'japan-1', viewValue: 'Japan'},
    {value: 'china-2', viewValue: 'China'}
  ];
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    
    
  }
  

}
