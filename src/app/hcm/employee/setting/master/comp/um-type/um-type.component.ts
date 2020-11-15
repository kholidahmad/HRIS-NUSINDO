import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {SortDescriptor, State} from '@progress/kendo-data-query';
import {TableDataService} from '../../../../../../apps/core/services/kendo/table-data.service';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';
import {ModMaster} from '../../model/mod-master';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-um-type',
  templateUrl: './um-type.component.html',
  styleUrls: ['./um-type.component.scss']
})
export class UmTypeComponent implements OnInit {
    public editDataItem : ModMaster;
    public view: Observable<GridDataResult>;
    public active = false;
    public url = "/api/f_employee/f_setting/f_master/c_master_type";
    public isNew: boolean;

    public sort: SortDescriptor[] = [{
        field: 'id_master_type',
        dir: 'asc'
    }];

    public state: State = {
        skip: 0,
        take: 15,
        sort: this.sort
    };

    constructor(private TableService: TableDataService,
                private http: HttpService,
                private alert: UiAlertService,
                private route: Router,
                private activeRoute: ActivatedRoute) {
        /*this.route.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };*/

        this.view = TableService;
        this.TableService.query(`${this.url}/read`, this.state);
    }

    ngOnInit() {

    }


    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.TableService.query(`${this.url}/read`, state);
    }

    public previewHandler(id_master_type: number, master_type_name: string) {
        this.route.navigate(["/hcm/employee/setting/master/"],{queryParams:{
            master_type:JSON.stringify({id_master_type:id_master_type,master_name:master_type_name}),
            path:JSON.stringify([{name:"Type Master", url:"/hcm/employee/setting"}])
            }
        });
    }

}
