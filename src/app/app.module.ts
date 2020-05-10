import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './demo/button/button.component';
import { MatCardComponent } from './demo/mat-card/mat-card.component';
import { TabsComponent } from './demo/tabs/tabs.component';
import { ContactCardComponent } from './demo/contact-card/contact-card.component';
import { FormControlComponent } from './demo/form-control/form-control.component';
import { StepperComponent } from './demo/stepper/stepper.component';
import { ModalsComponent } from './demo/modals/modals.component';
import { MatDialogExampleComponent } from './demo/mat-dialog-example/mat-dialog-example.component';
import { FormsModule } from '@angular/forms';
import { MatTableComponent } from './demo/mat-table/mat-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { UserService } from './core/services/user.service';
import { ContactManagerModule } from './contact-manager/contact-manager.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DragDropDialogComponent } from './demo/drag-drop-dialog/drag-drop-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MatCardComponent,
    TabsComponent,
    ContactCardComponent,
    FormControlComponent,
    StepperComponent,
    ModalsComponent,
    MatDialogExampleComponent,
    MatTableComponent,
    DashboardComponent,
    DragDropDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ContactManagerModule
  ],
  exports:[
    MatTableComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
