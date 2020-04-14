import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ButtonComponent } from './demo/button/button.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardComponent } from './demo/mat-card/mat-card.component';
import { MatCardModule } from '@angular/material/card';
import { TabsComponent } from './demo/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactCardComponent } from './demo/contact-card/contact-card.component';
import { FormControlComponent } from './demo/form-control/form-control.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StepperComponent } from './demo/stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SideNavComponent } from './contact-manager/components/side-nav/side-nav.component';
import { MainContentComponent } from './contact-manager/components/main-content/main-content.component';
import { MainToolbarComponent } from './contact-manager/components/main-toolbar/main-toolbar.component';
import { MatDialogExampleComponent } from './demo/mat-dialog-example/mat-dialog-example.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogsActivityComponent } from './demo/dialogs-activity/dialogs-activity.component';
import { DialogsActivityModalComponent } from './demo/dialogs-activity-modal/dialogs-activity-modal.component';
import { MatTableComponent } from './demo/mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { UserApiComponent } from './demo/user-api/user-api.component';
import { DragDropComponent } from './demo/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
    SideNavComponent,
    MainContentComponent,
    MainToolbarComponent,
    MatDialogExampleComponent,
    DialogsActivityComponent,
    DialogsActivityModalComponent,
    MatTableComponent,
    UserApiComponent,
    DragDropComponent,
    DragDropDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    DragDropModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
