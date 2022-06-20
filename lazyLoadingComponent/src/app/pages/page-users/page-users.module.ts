import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUsersRoutingModule } from './page-users-routing.module';
import { PageUsersComponent } from './page-users.component';


@NgModule({
  declarations: [
    PageUsersComponent
  ],
  imports: [
    CommonModule,
    PageUsersRoutingModule
  ]
})
export class PageUsersModule { }
