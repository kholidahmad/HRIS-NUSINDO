import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
      FormsModule
  ],
  declarations: [
      LoginComponent
  ]
})
export class PagesModule { }
