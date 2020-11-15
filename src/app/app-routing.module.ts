import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

//import { FullLayoutComponent } from "./layouts/full/full-layout.component";
//import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

//import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import {LayoutComponent} from './apps/template/layout/layout.component';
import {AppComponent} from './app.component';
import {KendoTableComponent} from './kendo-table/kendo-table.component';
import {LoginPageComponent} from './pages/content-pages/login/login-page.component';
import {AuthGuard} from './apps/core/services/auth/auth-guard.service';
import {Full_ROUTES} from './apps/core/routes/full-layout.routes';

/*
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/dashboard1',
    pathMatch: 'full',
  },
  { path: '', component: LayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  //{ path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: 'pages/error'
  }
];
*/
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard/dashboard1',
        pathMatch: 'full',
    },
    { path: '', component: LayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
    { path: '', component: LoginPageComponent, data: { title: 'full Views' }, children: CONTENT_ROUTES },
    { path: '', component: AppComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES},
    { path: 'kendo-table', component: KendoTableComponent, data:{}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
