import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router, NavigationEnd, RouterOutlet} from '@angular/router';
import { filter } from 'rxjs/operators';
import {slideInAnimation} from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [slideInAnimation]
})
export class AppComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    constructor(private router: Router) {
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    ngOnInit() {
        this.subscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => window.scrollTo(0, 0));
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }



}