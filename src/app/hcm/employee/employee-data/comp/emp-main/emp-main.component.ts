import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {SortDescriptor, State} from '@progress/kendo-data-query';
import {TableDataService} from '../../../../../apps/core/services/kendo/table-data.service';
import {HttpService} from '../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../apps/core/services/ui/ui-alert.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-emp-main',
  templateUrl: './emp-main.component.html',
  styleUrls: ['./emp-main.component.scss'],
  providers:  [TableDataService]
})
export class EmpMainComponent implements OnInit {
    public editDataItem: any;
    public view: Observable<GridDataResult>;
    public active = false;
    public isNew: boolean;
    //public listLevel = listTotalLevel;
    public url = "";
    public label: any;

    @Input() public parameterUrl = "";


    public sort: SortDescriptor[] = [{
        field: '',
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
                private router: ActivatedRoute,
                private route: Router) {


        this.view = this.TableService;
        this.url = "/api/f_employee/f_employee_data/c_employee_data";
        this.get_label_table();
        //console.log(this.url);
        //alert(this.url);
    }

    ngOnInit() {

        //console.log(this.parameterUrl);
        if(this.parameterUrl==="") {
            //this.parameterUrl = this.router.snapshot.paramMap.get('id_master');
        }
        this.TableService.query(`${this.url}/read`, this.state);
        //console.log(this.view);
    }

    public getBooleanTrueFalse(trueFalse: string) {
        if(trueFalse === "true") {
            return false;
        } else {
            return true;
        }
    }

    public get_label_table() {
        let labelx = this.label;
        console.log("xxxxx");
        this.http.get(this.url+"/get_label_level",[],"label table").
        subscribe(result=> {
            this.label = result;
            console.log(this.label);
        });
    }

    public listText(value: any) {
        //console.log(value);
        //return this.listLevel.find(x => x.value === value);
    }

    public viewProfile(value: string) {
        this.route.navigateByUrl("/hcm/employee/employee-data/emp-profile/"+value);
    }


    public setRelease(id_level: number) {
        let data_updated = {
            "update_where": {
                "id_level1": id_level
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

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.TableService.query(`${this.url}/read`, state);
    }
    public editHandler(dataItem: any) {
        /*this.editDataItemLevel1 = dataItem;*/
        //console.log(dataItem);
        this.isNew = false;
        this.active = true;
        this.editDataItem = dataItem;
    }
    public addHandler(event:any) {
        this.isNew = true;
        this.active = true;
        //this.editDataItem = new ModMasterLevel();
    }
    public saveHandler(event:any) {
        this.TableService.query(`${this.url}/read`, this.state);
        //console.log(dataItem);
        /*this.editDataItemLevel1 = undefined;*/
    }

    public cancelHandler(e) {
        this.editDataItem = undefined;
    }

    public removeHandler(id_level1: number) {
        let delete_item = {
            "id_level1": id_level1
        };
        let lAlert = this.alert;
        let httpx = this.http;
        let tab = this.TableService;
        let url = this.url;
        let state = this.state;
        this.alert.alert_confirm('Apakah ingin menghapus?').then(function (data) {
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
