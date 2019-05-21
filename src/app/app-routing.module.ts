import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { ParkedListComponent } from './parked-list/parked-list.component';

const routes: Routes = [
    { path: 'registration', component: CreateRegistrationComponent },
    { path: 'parked', component: ParkedListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}