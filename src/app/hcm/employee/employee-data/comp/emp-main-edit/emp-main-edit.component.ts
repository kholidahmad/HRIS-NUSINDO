import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
//import {listTotalLevel} from '../../const/listTotalLevel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../../../apps/core/services/http/http.service';
//import {json} from 'ng2-validation/dist/json';
import {UiAlertService} from '../../../../../apps/core/services/ui/ui-alert.service';
//import {ModMasterLevel} from '../../model/mod-master-level';


@Component({
  selector: 'app-emp-main-edit',
  templateUrl: './emp-main-edit.component.html',
  styleUrls: ['./emp-main-edit.component.scss']
})
export class EmpMainEditComponent implements OnInit {

    public editForm: FormGroup = new FormGroup({
        nik: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        status_emp: new FormControl('', Validators.required)
    });

    @Input() public isNew = false;
    @Input() public active = false;
    @Input() public urledit = "";

    @Output() save: EventEmitter<any> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpService,
                private alert: UiAlertService) { }

    ngOnInit() {
    }

    @Input() public set model(dataEdit: any) {
        //console.log(dataEdit);
        this.editForm.reset(dataEdit);
        this.active = dataEdit !== undefined;
    }


    public onSave(e) {

        this.alert.alert_loading();
        let data_insert = this.editForm.value;
        if (this.isNew) {
            //delete data_insert['id_level1'];
            let data = JSON.stringify(data_insert);
            this.http.get(this.urledit + '/create', data, "Error get save data").subscribe(data => {

                console.log(data);
                if(data["status"] === "success") {
                    console.log("saved!");
                    this.alert.alert_success("Saved Successfully!!");
                } else {
                    this.alert.alert_failed(data["status"]);
                }
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
        this.save.emit(this.editForm.value);
        this.active = false;
    }
    private closeForm() {
        this.active = false;
    }

}
