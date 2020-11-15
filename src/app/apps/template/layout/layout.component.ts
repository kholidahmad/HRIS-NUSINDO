import {
  Component,
  OnInit,
  ElementRef,
  Inject,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ConfigService } from "app/shared/services/config.service";
import { DOCUMENT } from "@angular/common";
import { LayoutService } from "app/shared/services/layout.service";
import { Subscription } from "rxjs";
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from '../../../animations';

let fireRefreshEventOnWindow = function() {
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("resize", true, false);
  window.dispatchEvent(evt);
};

@Component({
  selector: "app-full-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  animations: [slideInAnimation]
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild("sidebarBgImage", {static: true}) sidebarBgImage: ElementRef;
  @ViewChild("appSidebar", {static: true}) appSidebar: ElementRef;
  @ViewChild("wrapper", {static: true}) wrapper: ElementRef;

  options = {
    direction: "ltr",
    bgColor: "black",
    bgImage: "assets/img/sidebar-bg/01.jpg"
  };
  hideSidebar: boolean;
  layoutSub: Subscription;
  iscollapsed = false;
  isSidebar_sm = false;
  isSidebar_lg = false;
  bgColor = "black";
  bgImage = "assets/img/sidebar-bg/01.jpg";

  public config: any = {};

  constructor(
    private elementRef: ElementRef,
    private layoutService: LayoutService,
    private configService: ConfigService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {

    this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(
      options => {
          this.renderer.addClass(this.wrapper.nativeElement, "nav-collapsed");
          this.renderer.addClass(
              this.wrapper.nativeElement,
              "menu-collapsed"
          );
        //this.renderer.addClass(this.wrapper.nativeElement, "nav-collapsed");
        if (options) {
          if (options.bgColor) {
            this.bgColor = options.bgColor;
          }
          if (options.bgImage) {
            this.bgImage = options.bgImage;
            this.renderer.setAttribute(
              this.sidebarBgImage.nativeElement,
              "style",
              'background-image: url("' + this.bgImage + '")'
            );
          }

          if (options.bgImageDisplay === true) {
            this.bgImage = options.bgImage;
            this.renderer.setAttribute(
              this.sidebarBgImage.nativeElement,
              "style",
              'display: block; background-image: url("' + this.bgImage + '")'
            );
          } else if (options.bgImageDisplay === false) {
            this.bgImage = "";
            // this.renderer.setAttribute(this.sidebarBgImage.nativeElement, 'style', 'display: none');
            this.renderer.setAttribute(
              this.sidebarBgImage.nativeElement,
              "style",
              "background-image: none"
            );
          }


        }
      }
    );
  }
  prepareRoute(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
  }
    ngOnInit() {
        this.config = this.configService.templateConf;
        this.bgColor = this.config.layout.sidebar.backgroundColor;
        this.options.bgColor = this.bgColor;
        this.options.bgImage = this.bgImage;

        this.layoutService.emitCustomizerChange(this.options);

    }


  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  onClick(event) {
    //initialize window resizer event on sidebar toggle click event
    setTimeout(() => {
      fireRefreshEventOnWindow();
    }, 300);
  }

  toggleHideSidebar($event: boolean): void {
    setTimeout(() => {
      this.hideSidebar = $event;
    }, 0);
  }

  getOptions($event): void {
    this.options = $event;
  }
}
