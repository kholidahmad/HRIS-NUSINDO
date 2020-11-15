import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {SortDescriptor, State} from '@progress/kendo-data-query';
import {TableDataService} from '../../../../../../apps/core/services/kendo/table-data.service';
import {listTotalLevel} from '../../const/listTotalLevel';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';
import {ModMasterLevel} from '../../model/mod-master-level';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-um-level2',
  templateUrl: './um-level2.component.html',
  styleUrls: ['./um-level2.component.scss'],
    providers:  [TableDataService]
})
export class UmLevel2Component implements OnInit {
    public editDataItem : ModMasterLevel;
    public view: Observable<GridDataResult>;
    public active = false;
    public isNew: boolean;
    public listLevel = listTotalLevel;
    @Input() public parameterUrl = "";
    public url = "";

    public sort: SortDescriptor[] = [{
        field: 'id_level2',
        dir: 'asc'
    }];

    public state: State = {
        skip: 0,
        take: 15,
        sort: this.sort
    };

    constructor(public TableService: TableDataService,
                private http: HttpService,
                private alert: UiAlertService,
                private router: ActivatedRoute) {
        this.view = TableService;
        //this.parameterUrl = this.router.snapshot.paramMap.get('id_master_unit');
    }

    ngOnInit() {
        if(this.parameterUrl==="") {
            this.parameterUrl = this.router.snapshot.paramMap.get('id_master');
        }
        this.url = "/api/f_employee/f_setting/f_master/c_master_lv2/"+this.parameterUrl;
        this.TableService.query(`${this.url}/read`, this.state);
        //console.log("xxx");
    }

    public setRelease(id_level: number) {
        let data_updated = {
            "update_where": {
                "id_level2": id_level
            },
            "update_data": {
                "status_release_lv2": true
            }
        };
        let LAlert = this.alert;

        LAlert.alert_loading();
        this.http.get(`${this.url}/update`, JSON.stringify(data_updated), "Update Error").
        subscribe((data:any)=> {
            if(data.status === "success") {
                this.TableService.query(`${this.url}/read`, this.state);
            } else {
                LAlert.alert_failed("Gagal..Periksa Koneksi Anda..");
            }
            LAlert.close_all_loading_and_message();
        });
    }

    public listText(value: any) {
        //console.log(value);
        return this.listLevel.find(x => x.value === value);
    }




    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.TableService.query(`${this.url}/read`, state);
    }
    public editHandler(dataItem: any) {
        /*this.editDataItem = dataItem;*/
        //console.log(dataItem);
        this.isNew = false;
        this.active = true;
        this.editDataItem = dataItem;
    }
    public addHandler(event:any) {
        this.isNew = true;
        this.active = true;
        this.editDataItem = new ModMasterLevel();
    }
    public saveHandler(event:any) {
        this.TableService.query(`${this.url}/read`, this.state);
    }
    public cancelHandler(event:any) {
        this.editDataItem = undefined;
    }

    public removeHandler(id_level: number) {
        let delete_item = {
            "id_level2": id_level
        };
        let lAlert = this.alert;
        let httpx = this.http;
        let tab = this.TableService;
        let url = this.url;
        let state = this.state;
        this.alert.alert_confirm().then(function (data) {
            //alert(success);
            if (data.value) {
                lAlert.alert_loading();
                httpx.get(`${url}/delete`, JSON.stringify(delete_item), "Delete Error").subscribe((data: any) => {
                    if (data.status === 'success') {
                        tab.query(`${url}/read`, state);
                        lAlert.alert_success("Deleted Successfully!!");
                    } else {
                        lAlert.alert_failed("Deleted Failed!!")
                    }
                });
            }
        });
    }
}
