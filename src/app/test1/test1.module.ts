import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from './test-comp/test-comp.component';
import {GridModule} from '@progress/kendo-angular-grid';
import { Test1RoutingModule } from './test1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    Test1RoutingModule,
  ],
  declarations: [TestCompComponent]
})
export class Test1Module { }
