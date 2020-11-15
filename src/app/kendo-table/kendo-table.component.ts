import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {TableDataService} from '../apps/core/services/kendo/table-data.service';
import {State} from '@progress/kendo-data-query';
import {EditKendoModel} from './edit-kendo-table/edit-kendo-model';
import {statusDataItem} from './const/statusItem';





    @Component({
  selector: 'app-kendo-table',
  templateUrl: './kendo-table.component.html',
  styleUrls: ['./kendo-table.component.scss']
})


export class KendoTableComponent implements OnInit {

    public view: Observable<GridDataResult>;
    public active = false;
    public state: State = {
        skip: 0,
        take: 15
    };
    private url = "/api/test";
    public editDataItem: EditKendoModel;
    public isNew: boolean;
    public statusVar = statusDataItem;
    ngOnInit() {
    }

    constructor(private service: TableDataService) {
        this.view = service;
        this.service.query(`${this.url}/read`, this.state);
    }

    public status(value: string): any {
            return this.statusVar.find(x => x.value === value);
    }
    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(`${this.url}/read`, state);
    }

    public editHandler(dataItem: any) {
        this.editDataItem = dataItem;
    }

    public removeHandler(dataItem: any) {
        console.log(dataItem);
        //this.state = state;
        //this.service.query(`${this.url}/delete`, state);
    }

    public addHandler(event: any) {
        this.isNew = true;
        this.active = true;
        this.editDataItem = new EditKendoModel();
    }

    public saveHandler(dataItem: EditKendoModel) {
        console.log(dataItem);
        this.editDataItem = undefined;
    }

    public cancelHandler() {
      this.editDataItem = undefined;
    }
}
