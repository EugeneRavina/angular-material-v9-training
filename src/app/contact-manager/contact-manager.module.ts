import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { ContactManagerComponent } from './contact-manager.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { DragDropComponent } from '../demo/drag-drop/drag-drop.component';


const routes: Routes = [
  {
    path: '', component: ContactManagerComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainToolbarComponent,
    SideNavComponent,
    MainContentComponent,
    ContactManagerComponent,
    DragDropComponent,
  ],
  exports: [RouterModule]
})
export class ContactManagerModule { }
