import { ApprovalHealthComponent } from './approval_health/approval-health/approval-health.component';
import { RequestHealthComponent } from './request_health/request-health/request-health.component';
import { ReportHealthComponent } from './report_health/report-health/report-health.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {
        path : '',
        children : [
            {
                path : 'report_health',
                component : ReportHealthComponent
            },
            {
                path : 'request_health',
                component : RequestHealthComponent
            },
            {
              path: 'report_health/:id',
              component: ApprovalHealthComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthClaimRoutingModule { }
