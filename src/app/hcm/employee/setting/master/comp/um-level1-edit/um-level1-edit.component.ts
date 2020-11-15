import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {listTotalLevel} from '../../const/listTotalLevel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../../../../apps/core/services/http/http.service';
//import {json} from 'ng2-validation/dist/json';
import {UiAlertService} from '../../../../../../apps/core/services/ui/ui-alert.service';
import {ModMasterLevel} from '../../model/mod-master-level';


@Component({
  selector: 'app-um-level1-edit',
  templateUrl: './um-level1-edit.component.html',
  styleUrls: ['./um-level1-edit.component.scss']
})
export class UmLevel1EditComponent implements OnInit {

    public editForm: FormGroup = new FormGroup({
        id_level1: new FormControl(),
        id_master: new FormControl(),
        nama_lv1: new FormControl('', Validators.required)
    });

    @Input() public isNew = false;
    @Input() public active = false;
    @Input() public urledit = "";

    @Output() save: EventEmitter<ModMasterLevel> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpService,
                private alert: UiAlertService) { }

    ngOnInit() {
    }

    @Input() public set model(dataEdit: ModMasterLevel) {
        //console.log(dataEdit);
        this.editForm.reset(dataEdit);
        this.active = dataEdit !== undefined;
    }


    public onSave(e) {

        this.alert.alert_loading();
        let data_insert = this.editForm.value;
        if(this.isNew) {
            delete data_insert['id_level1'];
            let data = JSON.stringify(data_insert);
            this.http.get(this.urledit + '/create', data, "Error get save data").subscribe(data => {
                console.log("saved!");
                this.alert.alert_success("Saved Successfully!!")
            });
            this.save.emit(this.editForm.value);
            this.active = false;
        } else {
            //console.log(data_insert);
            let id_update = {"id_level1":data_insert.id_level1};
            //console.log(id_update);
            delete data_insert['id_level1'];
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

    public onCancel(e) {
        //e.preventDefault();
        this.cancel.emit();
    }
    private closeForm() {
        this.active = false;
    }

}
