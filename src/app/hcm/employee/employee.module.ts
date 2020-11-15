import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
//import { PermanentComponent } from './permanent/permanent.component';
import { NonPermanentComponent } from './non-permanent/non-permanent.component';
import { AccessStatusComponent } from './access-status/access-status.component';
import { SettingComponent } from './setting/setting.component';
import { EditPermanentComponent } from './permanent/edit-permanent/edit-permanent.component';
import { EditNonPermanentComponent } from './non-permanent/edit-non-permanent/edit-non-permanent.component';
import {ExcelModule, GridModule} from '@progress/kendo-angular-grid';
import {DialogsModule} from '@progress/kendo-angular-dialog';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@progress/kendo-angular-layout';
import {TabstripLoadDirective} from '../../apps/template/directives/tabstrip-load.directive';
import { UmMainComponent } from './setting/master/comp/um-main/um-main.component';
import {UmMainEditComponent} from './setting/master/comp/um-main-edit/um-main-edit.component';
import { UmLevel1Component } from './setting/master/comp/um-level1/um-level1.component';
import {UmLevel1EditComponent } from './setting/master/comp/um-level1-edit/um-level1-edit.component';
import { UmLevel2Component } from './setting/master/comp/um-level2/um-level2.component';
import {UmLevel2EditComponent} from './setting/master/comp/um-level2-edit/um-level2-edit.component';
import {UmLevel3Component} from './setting/master/comp/um-level3/um-level3.component';
import {UmLevel3EditComponent} from './setting/master/comp/um-level3-edit/um-level3-edit.component';
import { UmTabLevelComponent } from './setting/master/comp/um-tab-level/um-tab-level.component';
import {UmTypeComponent} from './setting/master/comp/um-type/um-type.component';
import {EmpMainComponent} from './employee-data/comp/emp-main/emp-main.component';
import {EmpMainEditComponent} from './employee-data/comp/emp-main-edit/emp-main-edit.component';
import {EmpProfilePageComponent} from './employee-data/comp/emp-profile/emp-profile-page.component';
// import {FormModule} from '../../forms/forms.module';
import {DatePickerModule} from '@progress/kendo-angular-dateinputs';
import {InputsModule} from '@progress/kendo-angular-inputs';
import { EmpUploadPhotoComponent } from './employee-data/comp/emp-upload-photo/emp-upload-photo.component';
import {UiAlertService} from '../../apps/core/services/ui/ui-alert.service';

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
      EmployeeRoutingModule,
      FormsModule,
      DatePickerModule,
      InputsModule
  ],
  declarations: [
      /*PermanentComponent,*/ NonPermanentComponent,
      AccessStatusComponent,
      SettingComponent,
      EditPermanentComponent,
      EditNonPermanentComponent,
      UmMainComponent,
      UmMainEditComponent,
      UmTabLevelComponent,
      TabstripLoadDirective,
      UmLevel1Component,
      UmLevel2Component,
      UmLevel3Component,
      UmLevel1EditComponent,
      UmLevel2EditComponent,
      UmLevel3EditComponent,
      UmTypeComponent,
      EmpMainComponent,
      EmpMainEditComponent,
      EmpProfilePageComponent,
      EmpUploadPhotoComponent
     ],
providers: [
    UiAlertService
]
})
export class EmployeeModule { }
