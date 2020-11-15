import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestCompComponent} from './test-comp/test-comp.component';

const routes: Routes= [
    {
      path: 'test-comp',
      component: TestCompComponent,
      data: {
        title: 'TestComp' ,
        animation: 'testComp'
      }
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class Test1RoutingModule { }
