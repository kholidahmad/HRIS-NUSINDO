import { Component, OnInit } from '@angular/core';
//import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from './sidebar.metadata';
import {Router, ActivatedRoute, RouterOutlet} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpService} from '../../core/services/http/http.service';
import  raja from '../../../../assets/menu/raja.json';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})



export class SidebarComponent implements OnInit {
    public menuItems: any[];
    private url = "api/apps/apps/get_menu/left_menu";
    private routes: any[];
    constructor(private router: Router,
                private route: ActivatedRoute,
                public translate: TranslateService,
                private http: HttpService) {

    }

    ngOnInit() {
        console.log("ooooppp");
        console.log(raja);
        let xx : any[];
        xx = raja;
        //export const sss: RouteInfo[];
        xx.push(
            {
                path: '/kendo-table',
                title: 'KendoTable',
                icon: 'ft-message-square',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            });

        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = raja;


        /*this.http.getWOb(this.url,[],'apiMenu').subscribe(data => {
            let x = data;
            x.push({ path: '/kendo-table', title: 'KendoTable', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] });
            const sss: RouteInfo[] = x;
            $.getScript('./assets/js/app-sidebar.js');
            this.menuItems = sss.filter(menuItem => menuItem);
            console.log("llololo");
            console.log(this.routes);
        });*/
        console.log("sssss")
        //console.log(ROUTES);
        //console.log(sss);
        //console.log(this.routes);
    }


    //NGX Wizard - skip url change
    /**/
}
