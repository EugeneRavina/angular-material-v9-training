import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule , NgForm} from '@angular/forms'
import {HttpClientModule, HttpClient} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule, MatIcon } from '@angular/material/icon'

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatCheckboxModule, MatCheckbox } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule, MatButtonToggle } from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule, } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule, DateAdapter} from  '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { DragDropModule } from '@angular/cdk/drag-drop';


import { StepperComponent } from './practice/stepper/stepper.component';
import { SideNavComponent } from './contact-manager/components/side-nav/side-nav.component';
import { MainToolbarComponent } from './contact-manager/components/main-toolbar/main-toolbar.component';
import { MainContentComponent } from './contact-manager/components/main-content/main-content.component';
import { DialogComponent } from './practice/dialog/dialog.component';
import { ModalComponent } from './practice/modal/modal.component';
import { TableComponent } from './practice/table/table.component';
import { CardComponent } from './practice/card/card.component';
import { UsercardsComponent } from './userDialog/usercards/usercards.component';
import { UserDialogComponent } from './userDialog/userdialog/user-dialog.component';
import { DragDropComponent } from './contact-manager/final/drag-drop/drag-drop.component';
import { TicketDialogComponent } from './contact-manager/final/ticket-dialog/ticket-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    SideNavComponent,
    MainToolbarComponent,
    MainContentComponent,
    DialogComponent,
    ModalComponent,
    TableComponent,
    CardComponent,
    UsercardsComponent,
    UserDialogComponent,
    DragDropComponent,
    TicketDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
