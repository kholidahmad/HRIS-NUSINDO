import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileMainComponent } from './profile/comp/profile-main/profile-main.component';

const routes : Routes = [
    {
        path : '',
        children : [
            {
                path : 'profile/profile-main',
                component : ProfileMainComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyhomeRoutingModule { }