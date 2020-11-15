import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {TableDataService} from '../../../apps/core/services/kendo/table-data.service';
//import {ApiHcmUrl} from '../apps/core/config/api-hcm-url';
import {State} from '@progress/kendo-data-query';
import {EditKendoModel} from './edit-permanent/edit-kendo-model';
//import {statusDataItem} from '../../../kendo-table/const/statusItem';

@Component({
  selector: 'app-permanent',
  templateUrl: './permanent.component.html',
  styleUrls: ['./permanent.component.scss']
})
export class PermanentComponent implements OnInit {

    ngOnInit() {

    }
  /*public view: Observable<GridDataResult>;
  public active = false;
  public state: State = {
        skip: 0,
        take: 15
    };
  //public statusVar = statusDataItem;
  private url = "/api/employee/permanent";
  public editDataItem: EditKendoModel;
  public isNew: boolean;

  constructor() { }
  ngOnInit(private service: TableDataService) {
      this.view = service;
      this.service.query(`${this.url}/read`, this.state);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(`${this.url}/read`, state);
  }

  public editHandler(dataItem: any) {
        this.editDataItem = dataItem;
  }
  public removeHandler() {

  }

  public addHandler() {
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
*/
}
