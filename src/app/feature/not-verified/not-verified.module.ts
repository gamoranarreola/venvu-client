import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotVerifiedRoutingModule } from './not-verified-routing.module';
import { NotVerifiedComponent } from './components/not-verified/not-verified.component';
import { CardModule } from "primeng/card";


@NgModule({
  declarations: [
    NotVerifiedComponent
  ],
  imports: [
    CommonModule,
    NotVerifiedRoutingModule,
    CardModule
  ]
})
export class NotVerifiedModule { }
