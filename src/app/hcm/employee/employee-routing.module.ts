import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UmMainComponent} from './setting/master/comp/um-main/um-main.component';
import {UmTabLevelComponent} from './setting/master/comp/um-tab-level/um-tab-level.component';
import {UmLevel1Component} from './setting/master/comp/um-level1/um-level1.component';
import {UmLevel2Component} from './setting/master/comp/um-level2/um-level2.component';
import {UmLevel3Component} from './setting/master/comp/um-level3/um-level3.component';
import {UmTypeComponent} from './setting/master/comp/um-type/um-type.component';
import {EmpMainComponent} from './employee-data/comp/emp-main/emp-main.component';
import {EmpProfilePageComponent} from './employee-data/comp/emp-profile/emp-profile-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'setting',
                component: UmTypeComponent,
                data: {
                    title: 'Jenis Master',
                    animation: 'dash1'
                }
            },
            {
                path: 'setting/master',
                component: UmMainComponent,
                data: {
                    title: 'Unit Master',
                    animation: 'dash1'
                }
            },
            {
                path: 'setting/master/um-tab-level',
                component: UmTabLevelComponent,
                data: {
                    title: 'Unit Master Level',
                    animation: 'dash1'
                }
            },
            {
                path: 'setting/master/um-level1/:id_master',
                component: UmLevel1Component,
                data: {
                    title: 'Unit Master Level 1',
                    animation: 'dash1'
                }
            },
            {
                path: 'setting/master/um-level2/:id_master',
                component: UmLevel2Component,
                data: {
                    title: 'Unit Master Level 2',
                    animation: 'dash1'
                }
            },
            {
                path: 'setting/master/um-level3/:id_master',
                component: UmLevel3Component,
                data: {
                    title: 'Unit Master Level 3',
                    animation: 'dash1'
                }
            },
            {
                path: 'employee-data/emp-main',
                component: EmpMainComponent,
                data: {
                    title: 'Employee Data',
                    animation: 'dash1'
                }
            },
            {
                path: 'employee-data/emp-profile/:nik',
                component: EmpProfilePageComponent,
                data: {
                    title: 'Employee Profile',
                    animation: 'dash1'
                }
            }
            
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
