import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, State } from '@progress/kendo-data-query';
import { TableDataService } from './../../../../apps/core/services/kendo/table-data.service';
import { HttpService } from './../../../../apps/core/services/http/.backup';
import { UiAlertService } from './../../../../apps/core/services/ui/ui-alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModProfileMain } from './../../../myhome/profile/model/mod-profile-main';

@Component({
    selector: 'app-report-health',
    templateUrl: './report-health.component.html',
    styleUrls: ['./report-health.component.css'],
    providers:  [TableDataService]
})
export class ReportHealthComponent implements OnInit {

    public editDataItem: any;
    public view: Observable<GridDataResult>;
    public active = false;
    public isNew: boolean;
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
                private route: Router
    ) {
        this.view = this.TableService;
        this.url = "/api/healthy_claim/healthy_claim";
        this.get_label_table();       
    }

    ngOnInit() {
      //console.log(this.parameterUrl);
        if(this.parameterUrl==="") {
            //this.parameterUrl = this.router.snapshot.paramMap.get('id_master');
        }
        this.TableService.query(`${this.url}/read`, this.state);
        //console.log(this.view);
    }

    public get_label_table() {
        let labelx = this.label;
        // console.log("xxxxx");
        this.http.get(this.url+"/get_label_table",[],"label table").
        subscribe(result=> {
            this.label = result;
            console.log(this.label);
        });
    }

    public getBooleanTrueFalse(trueFalse: string) {
        if(trueFalse === "true") {
            return false;
        } else {
            return true;
        }
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
        // alert(dataItem);
    }
    public addHandler(event:any) {
        // alert(this.isNew);
        this.editDataItem = undefined;
        this.isNew = true;
        this.active = true;
    }
    public saveHandler(event:any) {
        // this.TableService.query(`${this.url}/read`, this.state);
        
        //console.log(dataItem);
        /*this.editDataItemLevel1 = undefined;*/
    }
    public cancelHandler(e) {
        this.editDataItem = undefined;
        this.isNew = undefined;
    }
    public removeHandler(id:any){
        let where = {
            'id': id
        };
        let lAlert = this.alert;
        let httpx = this.http;
        let url = this.url;
        let tab = this.TableService;
        let state = this.state;
        let hilang = this.active;
        this.alert.alert_confirm("Apakah yakin ingin menghapus?").then(function(data){
            if (data.value){
                lAlert.alert_loading();
                httpx.get(`${url}/delete`, JSON.stringify(where), "Delete Error").subscribe((data:any)=>{
                    if (data.status === 'success') {
                        lAlert.alert_success("Deleted Successfully!!");
                    } else {
                        lAlert.alert_failed("Deleted Failed!!")
                    }
                });
                tab.query(`${url}/read`, state);
                hilang = false;
            }
        });
    }

    public refreshGrid(){
        this.ngOnInit();
    }

    public setActive(val: boolean){
        this.active = val;
    }
    public setIsNew(val: boolean){
        this.isNew = val;
    }

}
