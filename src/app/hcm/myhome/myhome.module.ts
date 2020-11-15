import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing di folder ini
import { MyhomeRoutingModule } from './myhome-routing.module';
// import komponen
import { ProfileMainComponent } from './profile/comp/profile-main/profile-main.component';
import {ExcelModule, GridModule} from '@progress/kendo-angular-grid';
import {DialogsModule} from '@progress/kendo-angular-dialog';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@progress/kendo-angular-layout';
import {DatePickerModule} from '@progress/kendo-angular-dateinputs';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {UiAlertService} from '../../apps/core/services/ui/ui-alert.service';
import { ProfileEditComponent } from './profile/comp/profile-edit/profile-edit.component';

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
      MyhomeRoutingModule,
      FormsModule,
      DatePickerModule,
      InputsModule
    ],
    providers: [
        UiAlertService
    ],
    declarations: [
      ProfileMainComponent,
      ProfileEditComponent]
})
export class MyhomeModule {}