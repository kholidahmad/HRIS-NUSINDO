import { Component, OnInit, ElementRef } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from '../../../animations';
import {AuthService} from '../../core/services/auth/auth.service';

let fireRefreshEventOnWindow = function () {
    let evt = document.createEvent('HTMLEvents');
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
    animations:[
        slideInAnimation
    ]
})
export class LayoutComponent implements OnInit {

    options = {
        direction: 'ltr'
    };


    constructor(private elementRef: ElementRef,
                private auth: AuthService) { }

    ngOnInit() {
        // sidebar toggle event listner
        /*this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
        // customizer events
        this.elementRef.nativeElement.querySelector('#cz-compact-menu')
            .addEventListener('click', this.onClick.bind(this));
        this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
            .addEventListener('click', this.onClick.bind(this));*/
    }

    onClick(event) {
        // initialize window resizer event on sidebar toggle click event
        //setTimeout(() => { fireRefreshEventOnWindow() }, 3000);
        //return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    getOptions($event): void {
        this.options = $event;
    }

    prepareRoute(outlet: RouterOutlet) {
        //alert('xxx');
        //return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

}
