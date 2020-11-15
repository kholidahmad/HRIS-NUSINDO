import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';
import {ModUnitMasterLevel} from '../../model/mod-unit-master-level';


@Component({
  selector: 'app-um-level3-edit',
  templateUrl: './um-level3-edit.component.html',
  styleUrls: ['./um-level3-edit.component.scss']
})
export class UmLevel3EditComponent implements OnInit {
    
    
    
    
    
    public editForm: FormGroup = new FormGroup({
        id_unit_level2: new FormControl(),
        id_unit_level3: new FormControl(),
        nama_unit_lv3: new FormControl('', Validators.required)
    });
    
    public listUnitLevel1:any;
    
    @Input() public isNew = false;
    @Input() public active = false;
    @Input() public urledit = "";
    
    @Input() public set model(dataEdit: ModUnitMasterLevel) {
        //console.log(dataEdit);
        this.editForm.reset(dataEdit);
        this.active = dataEdit !== undefined;
        if(this.isNew) {
            this.selectedValue=null;
            //this.getListLevel();
        } else if(!this.isNew && this.active) {
            this.selectedValue = dataEdit.id_unit_level2;
            console.log(this.selectedValue);
            //this.getListLevel();
        }
        
    }
    
    @Output() save: EventEmitter<ModUnitMasterLevel> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    
    public selectedValue = null;
    constructor(private http: HttpService,
                private alert: UiAlertService) {
        
        
    }
    
    ngOnInit() {
        this.getListLevel();
    }
    
    
    public getListLevel() {
        this.http.get(`${this.urledit}/data_unit_level2`,{},"Data Level 2").subscribe( data => {
           this.listUnitLevel1 = data;
        });
    }
    
    
    public onSave(e) {
        //console.log(this.editForm)
        this.alert.alert_loading();
        let data_insert = this.editForm.value;
        if(this.isNew) {
            delete data_insert['id_unit_level3'];
            let data = JSON.stringify(data_insert);
            this.http.get(this.urledit + '/create', data, "Error get save data").subscribe(data => {
                console.log("saved!");
                this.alert.alert_success("Saved Successfully!!")
            });
            this.save.emit(this.editForm.value);
            this.active = false;
        } else {
            //console.log(data_insert);
            let id_update = {"id_unit_level3":data_insert.id_unit_level3};
            //console.log(id_update);
            delete data_insert['id_unit_level3'];
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
