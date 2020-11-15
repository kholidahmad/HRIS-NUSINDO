import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {listTotalLevel} from '../../const/listTotalLevel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModMaster} from '../../model/mod-master';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';

@Component({
  selector: 'app-um-main-edit',
  templateUrl: './um-main-edit.component.html',
  styleUrls: ['./um-main-edit.component.scss']
})
export class UmMainEditComponent implements OnInit {

  public listTotLevel = listTotalLevel;
  public editForm: FormGroup = new FormGroup({
      id_master: new FormControl(),
      nama_master: new FormControl('', Validators.required),
      level_total: new FormControl(0),
      nama_level1: new FormControl({value: '', disabled: true}, Validators.required),
      nama_level2: new FormControl({value: '', disabled: true}, Validators.required),
      nama_level3: new FormControl({value: '', disabled: true}, Validators.required),
      nama_level4: new FormControl({value: '', disabled: true}, Validators.required)
  });

  @Input() public isNew = false;
  @Input() public active = false;
  @Input() public urledit = "";
  
  @Output() save: EventEmitter<ModMaster> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpService,
              private cAlert: UiAlertService) {
  }
  

  ngOnInit() {
  }
  
  @Input() public set model(dataEdit: ModMaster) {
    //console.log(dataEdit);
    this.editForm.reset(dataEdit);
    this.active = dataEdit !== undefined;
    this.hideInput();
  }
  
  
  
  public onSave(e) {
    //console.log(this.editForm)
    this.cAlert.alert_loading();
    let data_insert = this.editForm.value;
    if(this.isNew) {
        delete data_insert['id_master'];
        let data = JSON.stringify(data_insert);
        this.http.get(this.urledit + '/create', data, "Error get save data").subscribe((data:any) => {
            console.log("saved!");
            if(data.status==='success'){
                this.cAlert.alert_success("Saved Successfully!!")
            } else {
                this.cAlert.alert_failed(data.status)
            }
        });
        this.save.emit(this.editForm.value);
        this.active = false;
    } else {
        //console.log(data_insert);
        let id_update = {"id_master":data_insert.id_master};
        delete data_insert['id_master'];
        let data_update = {
          "update_where" : id_update,
          "update_data" : data_insert
        };
        let data = JSON.stringify(data_update);
        this.http.get(this.urledit + '/update', data, "Error get save data").subscribe((data: any) => {
            if(data.status==='success') {
                this.cAlert.alert_success("Saved Successfully!!")
            } else {
                this.cAlert.alert_failed("Saved Failed!!")
            }
        });
        this.save.emit(this.editForm.value);
        this.active = false;
    }
  }
  
  public hideInput() {
    //console.log(this.editForm.value.level_total);
    let i=1;
    let tot = this.editForm.value.level_total;
    let new_control = new FormControl({value:"",disabled:false});
    let id="";
    while(i<=4) {
        id = String(i);
        if(i<=tot) {
            this.editForm.controls['nama_level'+id].reset({value:this.editForm.value['nama_level'+id],disabled:false});
        } else {
            this.editForm.controls['nama_level'+id].reset({value:"",disabled:true});
        }
        i++;
    }
    
  }
  
  public onCancel(e) {
      //e.preventDefault();
      this.active = false;
      this.cancel.emit();
  }
  private closeForm() {
      this.active = false;
  }

}
