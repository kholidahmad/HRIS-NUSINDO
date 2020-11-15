import { ReportHealthComponent } from './report_health/report-health/report-health.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthClaimRoutingModule } from './health-claim-routing.module';
import { RequestHealthComponent } from './request_health/request-health/request-health.component';
import { ApprovalHealthComponent } from './approval_health/approval-health/approval-health.component';
import { EditHealthComponent } from './edit-health/edit-health.component';



@NgModule({
  declarations: [
    RequestHealthComponent,
    ReportHealthComponent,
    ApprovalHealthComponent,
    EditHealthComponent
  ],
  imports: [
    ReactiveFormsModule,
    GridModule,
    ExcelModule,
    DialogsModule,
    ButtonsModule,
    DropDownsModule,
    CommonModule,
    LayoutModule,
    FormsModule,
    DatePickerModule,
    InputsModule,
    CommonModule,
    HealthClaimRoutingModule,
  ]
})
export class HealthClaimModule { }
