import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {listTotalLevel} from '../../const/listTotalLevel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModUnitMaster} from '../../model/mod-unit-master';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {json} from 'ng2-validation/dist/json';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';

@Component({
  selector: 'app-um-main-edit',
  templateUrl: './um-main-edit.component.html',
  styleUrls: ['./um-main-edit.component.scss']
})
export class UmMainEditComponent implements OnInit {

  public listTotLevel = listTotalLevel;
  public editForm: FormGroup = new FormGroup({
      id_mast_unit: new FormControl(),
      nama_master_unit: new FormControl('', Validators.required),
      level_total: new FormControl(0)
  });

  @Input() public isNew = false;
  @Input() public active = false;
  @Input() public urledit = "";
  
  @Output() save: EventEmitter<ModUnitMaster> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpService,
              private alert: UiAlertService) { }

  ngOnInit() {
  }
  
  @Input() public set model(dataEdit: ModUnitMaster) {
    //console.log(dataEdit);
    this.editForm.reset(dataEdit);
    this.active = dataEdit !== undefined;
  }
  
  
  public onSave(e) {
    //console.log(this.editForm)
    this.alert.alert_loading();
    let data_insert = this.editForm.value;
    if(this.isNew) {
        delete data_insert['id_mast_unit'];
        let data = JSON.stringify(data_insert);
        this.http.get(this.urledit + '/create', data, "Error get save data").subscribe(data => {
            console.log("saved!");
            this.alert.alert_success("Saved Successfully!!")
        });
        this.save.emit(this.editForm.value);
        this.active = false;
    } else {
        //console.log(data_insert);
        let id_update = {"id_mast_unit":data_insert.id_mast_unit};
        delete data_insert['id_mast_unit'];
        let data_update = {
          "update_where" : id_update,
          "update_data" : data_insert
        };
        let data = JSON.stringify(data_update);
        this.http.get(this.urledit + '/update', data, "Error get save data").subscribe((data: any) => {
            if(data.status==='success') {
                this.alert.alert_success("Saved Successfully!!")
            } else {
                this.alert.alert_failed("Saved Failed!!")
            }
        });
        this.save.emit(this.editForm.value);
        this.active = false;
    }
  }
  
  public onCancel(e) {
      e.preventDefault();
      this.cancel.emit();
  }
  private closeForm() {
      this.active = false;
  }

}
