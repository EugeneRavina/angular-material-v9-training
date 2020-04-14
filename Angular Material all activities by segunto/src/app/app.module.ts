import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogsComponent } from './dialogs/dialogs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { UserDialogsComponent } from './user-dialogs/user-dialogs.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DialogComponent } from './dialog/dialog.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatStepperComponent } from './mat-stepper/mat-stepper.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDialogComponent } from './drag-dialog/drag-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogsComponent,
    SidenavComponent,
    ToolbarComponent,
    MatTableComponent,
    MainContentComponent,
    UserDialogsComponent,
    MatCardComponent,
    MatStepperComponent,
    DragDropComponent,
    DragDialogComponent,
  
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
