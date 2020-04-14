import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './demo/button/button.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CardComponent } from './mat-card/card/card.component';
import { TabComponent } from './tabs/tab/tab.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { Form1Component } from './forms/form1/form1.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { Stepper1Component } from './stepper/stepper1/stepper1.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MainContentComponent } from './contact-manager/main-content/main-content.component';
import { MainToolbarComponent } from './contact-manager/main-toolbar/main-toolbar.component';
import { SidenavComponent } from './contact-manager/sidenav/sidenav.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatdialogComponent } from './dialog/matdialog/matdialog.component';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { ActivitydialogComponent } from './dialog/activitydialog/activitydialog.component';
import { ActivitymodalComponent } from './dialog/activitymodal/activitymodal.component';
import { ActivitytableComponent } from './table/activitytable/activitytable.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BidiModule} from '@angular/cdk/bidi';
import { UserdialogComponent } from './dialog/userdialog/userdialog.component';
import { UsercardComponent } from './usercard/usercard.component';
import { Routes, RouterModule } from '@angular/router';
import { DisabledsortComponent } from './dragdrop/disabledsort/disabledsort.component'
import {DragDropModule} from '@angular/cdk/drag-drop';
import { KanbandialogComponent } from './dialog/kanbandialog/kanbandialog.component';

const routes: Routes = [  
  {path:'',redirectTo:'activity1',pathMatch:'full'},
  {path:'activity1',redirectTo:'welcome',pathMatch:'full'},
  {path:'activity2',component:ActivitymodalComponent},
  {path:'activity3',component:ActivitytableComponent},
  {path:'activity4',component:UsercardComponent},
  {path:'dragdrop',component:DisabledsortComponent},
  { path: '**', component: Stepper1Component },
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    TabComponent,
    Form1Component,
    Stepper1Component,
    MainContentComponent,
    MainToolbarComponent,
    SidenavComponent,
    MatdialogComponent,
    DialogComponent,
    ActivitydialogComponent,
    ActivitymodalComponent,
    ActivitytableComponent,
    UserdialogComponent,
    UsercardComponent,
    DisabledsortComponent,
    KanbandialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    BidiModule,
    DragDropModule,
    RouterModule.forRoot(
      routes,
      { useHash: true }
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
