import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaldetailsComponent } from './components/personaldetails/personaldetails.component';
import { OfficialdetailsComponent } from './components/officialdetails/officialdetails.component';

const routes: Routes = [  
  {
    path: 'personal',
    component: PersonaldetailsComponent
  },
  {
    path: 'official',
    component: OfficialdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
