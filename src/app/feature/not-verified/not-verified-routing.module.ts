import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotVerifiedComponent } from './components/not-verified/not-verified.component';

const routes: Routes = [
  {
    path: '',
    component: NotVerifiedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotVerifiedRoutingModule { }
