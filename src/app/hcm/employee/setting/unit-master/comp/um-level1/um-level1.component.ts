import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {SortDescriptor, State} from '@progress/kendo-data-query';
import {TableDataService} from '../../../../../../apps/core/services/kendo/table-data.service';
import {listTotalLevel} from '../../const/listTotalLevel';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';
import {ModUnitMasterLevel} from '../../model/mod-unit-master-level';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-um-level1',
  templateUrl: './um-level1.component.html',
  styleUrls: ['./um-level1.component.scss'],
  providers:  [TableDataService]
})
export class UmLevel1Component implements OnInit {
    public editDataItemLevel1 : ModUnitMasterLevel;
    public viewLevel1: Observable<GridDataResult>;
    public active = false;
    public isNew: boolean;
    public listLevel = listTotalLevel;
    private url = "";
    
    @Input() public parameterUrl = "";
    
    
    public sort: SortDescriptor[] = [{
        field: 'id_unit_level1',
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
    
        
        this.viewLevel1 = this.TableService;
        //console.log(this.url);
        //alert(this.url);
    }
    
    ngOnInit() {
    
        //console.log(this.parameterUrl);
        if(this.parameterUrl==="") {
            this.parameterUrl = this.router.snapshot.paramMap.get('id_master_unit');
        }
        this.url = "/api/f_employee/f_setting/f_unit_master/c_unit_master_lv1/"+this.parameterUrl;
        this.TableService.query(`${this.url}/read`, this.state);
    }
    
    public listText(value: any) {
        //console.log(value);
        return this.listLevel.find(x => x.value === value);
    }
    
    
    public setRelease(id_level: number) {
        let data_updated = {
            "update_where": {
                "id_unit_level1": id_level
            },
            "update_data": {
                "status_release_lv1": true
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
    
    public datastateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.TableService.query(`${this.url}/read`, state);
    }
    public editHandler(dataItem: any) {
        /*this.editDataItemLevel1 = dataItem;*/
        //console.log(dataItem);
        this.active = true;
        this.editDataItemLevel1 = dataItem;
    }
    public addHandler() {
        this.isNew = true;
        this.active = true;
        this.editDataItemLevel1 = new ModUnitMasterLevel();
    }
    public saveHandler() {
        this.TableService.query(`${this.url}/read`, this.state);
        //console.log(dataItem);
        /*this.editDataItemLevel1 = undefined;*/
    }
    
    public cancelHandler(e) {
        this.editDataItemLevel1 = undefined;
    }
    
    public removeHandler(id_level1: number) {
        let delete_item = {
            "id_unit_level1": id_level1
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
