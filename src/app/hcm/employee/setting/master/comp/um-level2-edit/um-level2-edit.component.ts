import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';
import {ModMasterLevel} from '../../model/mod-master-level';


@Component({
  selector: 'app-um-level2-edit',
  templateUrl: './um-level2-edit.component.html',
  styleUrls: ['./um-level2-edit.component.scss']
})
export class UmLevel2EditComponent implements OnInit {
    
    public editForm: FormGroup = new FormGroup({
        id_level1: new FormControl(),
        id_level2: new FormControl(),
        nama_lv2: new FormControl('', Validators.required)
    });
    
    public listUnitLevel1:any;
    
    @Input() public isNew = false;
    @Input() public active = false;
    @Input() public urledit = "";
    
    @Input() public set model(dataEdit: ModMasterLevel) {
        //console.log(dataEdit);
        this.editForm.reset(dataEdit);
        this.active = dataEdit !== undefined;
        //this.getListLevel();
        if(this.isNew) {
            this.selectedValue="";
            //this.getListLevel();
        } else if(!this.isNew && this.active) {
            this.selectedValue = dataEdit.id_level1;
            console.log(this.selectedValue);
            //this.getListLevel();
        }
        
    }
    
    @Output() save: EventEmitter<ModMasterLevel> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    
    public selectedValue = this.editForm.value['id_level1'];
    constructor(private http: HttpService,
                private alert: UiAlertService) {
        
        
    }
    
    ngOnInit() {
        this.getListLevel();
    }
    
    
    public getListLevel() {
        this.http.get(`${this.urledit}/data_level1`,{},"Data Level 1").subscribe( data => {
           this.listUnitLevel1 = data;
        });
    }
    
    
    public onSave(e) {
        //console.log(this.editForm)
        this.alert.alert_loading();
        let data_insert = this.editForm.value;
        if(this.isNew) {
            delete data_insert['id_level2'];
            let data = JSON.stringify(data_insert);
            this.http.get(this.urledit + '/create', data, "Error get save data").subscribe(data => {
                console.log("saved!");
                this.alert.alert_success("Saved Successfully!!")
            });
            this.save.emit(this.editForm.value);
            this.active = false;
        } else {
            //console.log(data_insert);
            let id_update = {"id_level2":data_insert.id_level2};
            //console.log(id_update);
            delete data_insert['id_level2'];
            let data_update = {
                "update_where" : id_update,
                "update_data" : data_insert
            };
            let data = JSON.stringify(data_update);
            this.http.get(this.urledit + '/update', data, "Error get save data").subscribe((data: any) => {
                if(data.status==='success') {
                    this.alert.alert_success("Updated Successfully!!")
                } else {
                    this.alert.alert_failed("Updated Failed!!")
                }
            });
            this.save.emit(this.editForm.value);
            this.active = false;
        }
    }
    
  
    public closeForm() {
        this.active = false;
        this.cancel.emit();
    }

}
