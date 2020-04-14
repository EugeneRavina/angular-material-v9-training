import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
// import { MainContentComponent } from './main-content/main-content.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DemoComponent } from './demo/demo.component';
import { ModalsComponent } from './modals/modals.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { TabsComponent } from './tabs/tabs.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropDialogComponent } from './drag-drop-dialog/drag-drop-dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
// import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    // MainContentComponent,
    MainToolbarComponent,
    SideNavComponent,
    DemoComponent,
    ModalsComponent,
    MatDialogComponent,
    TabsComponent,
    DragDropComponent,
    DragDropDialogComponent,
    // TableComponent,
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
