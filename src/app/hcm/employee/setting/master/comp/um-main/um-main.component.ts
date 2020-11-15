import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {SortDescriptor, State} from '@progress/kendo-data-query';
import {TableDataService} from '../../../../../../apps/core/services/kendo/table-data.service';
import {listTotalLevel} from '../../const/listTotalLevel';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';
import {ModMaster} from '../../model/mod-master';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-um-main',
  templateUrl: './um-main.component.html',
  styleUrls: ['./um-main.component.scss']
})
export class UmMainComponent implements OnInit {
    public editDataItem : ModMaster;
    public view: Observable<GridDataResult>;
    public active = false;
    public url = "/api/f_employee/f_setting/f_master/c_master";
    public isNew: boolean;
    public listLevel = listTotalLevel;

    public sort: SortDescriptor[] = [{
        field: 'id_master',
        dir: 'asc'
    }];

    public state: State = {
        skip: 0,
        take: 15,
        sort: this.sort
    };

    //public dataTypeName = nameType;
    public typeData="";
    public fieldName="";
    public queryParams:any;


    constructor(private TableService: TableDataService,
                private http: HttpService,
                private alert: UiAlertService,
                private route: Router,
                private activeRoute: ActivatedRoute,
                private location: Location) {
        /*this.route.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };*/
        this.activeRoute.queryParamMap.subscribe(params => {

            this.queryParams = {master_type:JSON.parse(params.getAll("master_type").toString()),
                                path:JSON.parse(params.getAll("path").toString())};
        });
        //this.typeData = this.activeRoute.snapshot.paramMap.get("id_master_type");
        //this.fieldName = this.queryParams.master_type.master_name;

        //this.fieldName = this.dataTypeName[this.typeData];
        this.url =  this.url +"/"+ this.queryParams.master_type.id_master_type;
        this.view = TableService;
        this.TableService.query(`${this.url}/read`, this.state);
    }

    ngOnInit() {

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
        this.editDataItem = new ModMaster();
    }
    public saveHandler(event:any) {
        this.TableService.query(`${this.url}/read`, this.state);
        //console.log(dataItem);
        /*this.editDataItem = undefined;*/
    }

    public previewHandler(editdata: ModMaster) {

        this.queryParams.path.push({
            name: this.queryParams.master_type.master_name + " Master",
            url: this.route.url
        });

        this.route.navigate(["/hcm/employee/setting/master/um-tab-level"],{
            queryParams: {
                path:JSON.stringify(this.queryParams.path),
                id_master_type:this.queryParams.master_type.id_master_type,
                master_type_name: this.queryParams.master_type.master_name,
                id_master:editdata.id_master,
                total_level:editdata.level_total,
                nama_level1: editdata.nama_level1,
                nama_level2: editdata.nama_level2,
                nama_level3: editdata.nama_level3,
                nama_level4: editdata.nama_level4
            }
        });
    }

    public cancelHandler(event:any) {
        this.editDataItem = undefined;
    }

    public setDefault(id_master: number) {
        let data_updated = {
            "update_where": {
                "id_master": id_master
            },
            "update_data": {
                "status_enable": true
            }
        };
        let LAlert = this.alert;
        let tab = this.TableService;

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

    public setRelease(id_master: number) {
        let data_updated = {
            "update_where": {
                "id_master": id_master
            },
            "update_data": {
                "status_release": true,
                "release_date": "current_timestamp"
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
    public removeHandler(id_master: number) {
        let delete_item = {
          "id_master": id_master
        };
        let lAlert = this.alert;
        let httpx = this.http;
        let tab = this.TableService;
        let url = this.url;
        let state = this.state;
        this.alert.alert_confirm().then(function (data) {
            //alert(success);
            if(data.value) {
                lAlert.alert_loading();
                httpx.get(`${url}/delete`,JSON.stringify(delete_item),"Delete Error").subscribe((data: any)=> {
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

    public goBack() {
        this.location.back();
    }
}
