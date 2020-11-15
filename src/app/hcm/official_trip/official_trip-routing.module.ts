import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportMainComponent } from './report/comp/report-main/report-main.component';
import { RequestComponent } from './request/request.component';

const routes : Routes = [
    {
        path : '',
        children : [
            {
                path : 'report/report-main',
                component : ReportMainComponent
            },
            {
                path : 'request',
                component : RequestComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Official_tripRoutingModule { }