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
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './demo/button/button.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardComponent } from './demo/mat-card/mat-card.component';
import { MatCardModule } from '@angular/material/card';
import { TabsComponent } from './demo/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsControlComponent } from './demo/forms-control/forms-control.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StepperComponent } from './demo/stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ModelsComponent } from './demo/models/models.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogModelsComponent } from './demo/mat-dialog-models/mat-dialog-models.component';
import { ModelActivityComponent } from './activityModel/model-activity/model-activity.component';
import { DialogActivityComponent } from './activityModel/dialog-activity/dialog-activity.component';
import { MatTableComponent } from './demo/mat-table/mat-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragDropDialogComponent } from './drag-drop-dialog/drag-drop-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MatCardComponent,
    TabsComponent,
    FormsControlComponent,
    StepperComponent,
    SideNavComponent,
    MainToolbarComponent,
    MainContentComponent,
    ModelsComponent,
    MatDialogModelsComponent,
    ModelActivityComponent,
    DialogActivityComponent,
    MatTableComponent,
    DragDropComponent,
    DragDropDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
