import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 
import { Official_tripRoutingModule } from './official_trip-routing.module';
import { ReportMainComponent } from './report/comp/report-main/report-main.component';
import {ExcelModule, GridModule} from '@progress/kendo-angular-grid';
import {DialogsModule} from '@progress/kendo-angular-dialog';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@progress/kendo-angular-layout';
import {DatePickerModule} from '@progress/kendo-angular-dateinputs';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {UiAlertService} from '../../apps/core/services/ui/ui-alert.service';
import { RequestComponent } from './request/request.component';

@NgModule({
    imports: [
      ReactiveFormsModule,
      GridModule,
      ExcelModule,
      DialogsModule,
      ButtonsModule,
      DropDownsModule,
      CommonModule,
      LayoutModule,
      Official_tripRoutingModule,
      FormsModule,
      DatePickerModule,
      InputsModule
    ],
    providers: [
        UiAlertService
    ],
    declarations: [
        ReportMainComponent,
        RequestComponent
    ]
})
export class Official_tripModule {}