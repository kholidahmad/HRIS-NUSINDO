import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { AgmCoreModule } from "@agm/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
// import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
// import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { DragulaService } from "ng2-dragula";
import {LayoutComponent} from './apps/template/layout/layout.component';
import {KendoTableComponent} from './kendo-table/kendo-table.component';
import {EditKendoTableComponent} from './kendo-table/edit-kendo-table/edit-kendo-table.component';
import {UploadModule} from '@progress/kendo-angular-upload';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {DialogsModule} from '@progress/kendo-angular-dialog';
import {ExcelModule, GridModule} from '@progress/kendo-angular-grid';
import {LayoutModule} from '@progress/kendo-angular-layout';
import {TemplateModule} from './apps/template/template.module';
import {AuthService} from './apps/core/services/auth/auth.service';
import {AuthGuard} from './apps/core/services/auth/auth-guard.service';
import {EmployeeModule} from './hcm/employee/employee.module';
import { MyhomeModule } from './hcm/myhome/myhome.module';
import { Official_tripModule } from './hcm/official_trip/official_trip.module';
import { HealthClaimModule } from './hcm/health_claim/health-claim.module';
// import { ProfileMainComponent } from './hcm/myhome/profile/comp/profile-main/profile-main.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent,
      LayoutComponent,
      KendoTableComponent,
      EditKendoTableComponent],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    TemplateModule,
    EmployeeModule,
    MyhomeModule,
    Official_tripModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: "YOUR KEY"
    }),
    PerfectScrollbarModule,
      LayoutModule,
      GridModule,
      ExcelModule,
      DialogsModule,
      ButtonsModule,
      DropDownsModule,
      DateInputsModule,
      InputsModule,
      UploadModule,
      HealthClaimModule
  ],
  providers: [
      AuthService,
      AuthGuard,
    DragulaService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
