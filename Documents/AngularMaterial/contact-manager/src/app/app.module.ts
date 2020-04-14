import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ButtonComponent } from './demo/button/button.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import { MatCardComponent } from './demo/mat-card/mat-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ContactCardComponent } from './demo/contact-card/contact-card.component';
import { FormControlComponent } from './demo/form-control/form-control.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { StepperComponent } from './demo/stepper/stepper.component';
import {MatListModule} from '@angular/material/list';
import { SideNavComponent } from './contact-manager/components/side-nav/side-nav.component';
import { MainContentComponent } from './contact-manager/components/main-content/main-content/main-content.component';
import { MainToolbarComponent } from './contact-manager/components/main-toolbar/main-toolbar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './contact-manager/components/table/table.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ModalsComponent } from './demo/modals/modals.component';
import { DialogExampleComponent } from './demo/dialog-example/dialog-example.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropComponent } from './contact-manager/drag-drop/drag-drop.component';
import { DragDropDialogComponent } from './contact-manager/drag-drop-dialog/drag-drop-dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MatCardComponent,
    ContactCardComponent,
    FormControlComponent,
    StepperComponent,
    SideNavComponent,
    MainContentComponent,
    MainToolbarComponent,
    TableComponent,
    ModalsComponent,
    DialogExampleComponent,
    DragDropComponent,
    DragDropDialogComponent,
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
    MatFormFieldModule,
    MatStepperModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
