import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { MainContentComponent } from './contact-manager/components/main-content/main-content.component';


const routes: Routes = [
    { path: 'contact-manager', component: ContactManagerComponent },
    { path: 'contact-manager/:id', component: MainContentComponent },
    { path: '**', redirectTo: 'contact-manager' }
];

// const routes: Routes = [
//   { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
//   { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
//   { path: '**', redirectTo: 'contactmanager' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
