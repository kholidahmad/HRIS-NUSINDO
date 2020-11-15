import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {SortDescriptor, State} from '@progress/kendo-data-query';
import {TableDataService} from '../../../../../../apps/core/services/kendo/table-data.service';
import {listTotalLevel} from '../../const/listTotalLevel';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';
import {ModUnitMaster} from '../../model/mod-unit-master';
import {Router} from '@angular/router';
///import {EditKendoModel} from '../../../../kendo-table/edit-kendo-table/edit-kendo-model';

@Component({
  selector: 'app-um-main',
  templateUrl: './um-main.component.html',
  styleUrls: ['./um-main.component.scss']
})
export class UmMainComponent implements OnInit {
    public editDataItem : ModUnitMaster;
    public view: Observable<GridDataResult>;
    public active = false;
    private url = "/api/f_employee/f_setting/f_unit_master/c_unit_master";
    public isNew: boolean;
    public listLevel = listTotalLevel;
    
    public sort: SortDescriptor[] = [{
        field: 'id_mast_unit',
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
                private route: Router) {
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
        this.active = true;
        this.editDataItem = dataItem;
    }
    public addHandler() {
        this.isNew = true;
        this.active = true;
        this.editDataItem = new ModUnitMaster();
    }
    public saveHandler() {
        this.TableService.query(`${this.url}/read`, this.state);
        //console.log(dataItem);
        /*this.editDataItem = undefined;*/
    }
    
    public previewHandler(id_master_unit: number, level: number) {
        /*this.editDataItem = dataItem;*/
        //console.log(dataItem);
        this.route.navigateByUrl("/hcm/employee/setting/unit-master/um-tab-level/"+id_master_unit+"/"+level);
    }
    
    public setDefault(id_mast_unit: number) {
        let data_updated = {
            "update_where": {
                "id_mast_unit": id_mast_unit
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
    
    public setRelease(id_mast_unit: number) {
        let data_updated = {
            "update_where": {
                "id_mast_unit": id_mast_unit
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
    public cancelHandler() {
       // this.editDataItem = undefined;
    }
    public removeHandler(id_mast_unit: number) {
        let delete_item = {
          "id_mast_unit": id_mast_unit
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
        
        //this.alert.alert_loading();
        /*this.http.get(`${this.url}/delete`,JSON.stringify(delete_item),"Delete Error").subscribe((data: any)=> {
            if (data.status === 'success') {
                this.TableService.query(`${this.url}/read`, this.state);
                this.alert.alert_success("Deleted Successfully!!");
            } else {
                this.alert.alert_failed("Deleted Failed!!")
            }
        });*/
        //this.state = state;
        //this.service.query(`${this.url}/delete`, state);
    }
}
