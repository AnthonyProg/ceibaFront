import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';

const routes: Routes = [
    { path: 'registration', component: CreateRegistrationComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}