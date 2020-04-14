import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ButtonComponent } from './demo/button/button.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCardComponent } from './demo/mat-card/mat-card.component';
import { TabsComponent } from './demo/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactCardComponent } from './demo/contact-card/contact-card.component';
import { FormControlComponent } from './demo/form-control/form-control.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StepperComponent } from './demo/stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SideNavComponent } from './contact-manager/components/side-nav/side-nav.component';
import { MainContentComponent } from './contact-manager/components/main-content/main-content.component';
import { MainToolbarComponent } from './contact-manager/components/main-toolbar/main-toolbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogExampleComponent } from './demo/mat-dialog-example/mat-dialog-example.component';
import { MatModalsComponent } from './demo/mat-modals/mat-modals.component';
import { MatDialogActivityComponent } from './activity/mat-dialog-activity/mat-dialog-activity.component';
import { MatModalActivityComponent } from './activity/mat-modal-activity/mat-modal-activity.component';
import { MatTableComponent } from './demo/mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTablesComponent } from './activity/mat-tables/mat-tables.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ModalComponent } from './contact-manager/modal/modal.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanBoardFinalsComponent } from './kanban-board-finals/kanban-board-finals.component';
import { DialogKanbanBoardFinalsComponent } from './dialog-kanban-board-finals/dialog-kanban-board-finals.component';

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
    MatModalsComponent,
    MatDialogActivityComponent,
    MatModalActivityComponent,
    MatTableComponent,
    MatTablesComponent,
    ModalComponent,
    DraganddropComponent,
    KanbanBoardFinalsComponent,
    DialogKanbanBoardFinalsComponent
  ],
  imports: [
    BrowserModule,
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
    MatSortModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
