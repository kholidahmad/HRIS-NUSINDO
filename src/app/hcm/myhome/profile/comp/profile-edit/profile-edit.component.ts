import { formatDate } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../../../apps/core/services/ui/ui-alert.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss'],

})
export class ProfileEditComponent implements OnInit {

    myDate = formatDate(new Date(), 'yyyyMMdd', 'en');
    
    public invoice = "NUS.HC.11."+this.myDate;
    public tgl: Date = new Date(2000, 2, 10);
    public editForm: FormGroup = new FormGroup({
        
        invoice: new FormControl('', Validators.required),
        nik_health: new FormControl('', Validators.required),
        id_keluarga: new FormControl('', Validators.required),
        nama_pegawai: new FormControl('', Validators.required),
        divisi: new FormControl('', Validators.required),
        keterangan: new FormControl('', Validators.required),
        tgl_claim: new FormControl('', Validators.required),
        biaya_claim: new FormControl('', Validators.required),
        bukti_claim: new FormControl('', Validators.required),
        status_claim: new FormControl('', Validators.required)

    });
    @Input() public isNew = false;
    @Input() public active = false;
    @Input() public urledit = "";

    @Output() save: EventEmitter<any> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() refresh: EventEmitter<any> = new EventEmitter();
    @Output() setaktif: EventEmitter<any> = new EventEmitter();
    @Output() setisnew: EventEmitter<any> = new EventEmitter();

    constructor(private http: HttpService,
      private alert: UiAlertService,
        private route: Router
    ) {
        this.urledit = "/api/healthy_claim/healthy_claim";
        
      }

    ngOnInit(){
        
    }

    @Input() public set model(dataEdit: any) {
        // console.log(dataEdit);
        // alert('hai');
        this.editForm.reset(dataEdit);
        this.active = dataEdit !== undefined;
    }

    public onCancel(e) {
        // this.cancel.emit(this.editForm.value);
        // this.isNew = undefined;
        // this.active=false;
        this.setaktif.emit(false);
        this.setisnew.emit(false);
        // alert(this.isNew);
    }
    public onSave(e) {
        let data = JSON.stringify(this.editForm.value);
        this.alert.alert_loading();
        this.http.get(this.urledit + '/create', data, "Error get save data").subscribe(data => {
            console.log(data);
            if(data["status"] === "success") {
                console.log("saved!");
                this.alert.alert_success("Saved Successfully!!");
            } else {
                this.alert.alert_failed(data["status"]);
            }
        });
        // this.route.navigateByUrl("/hcm/myhome/profile/profile-main");
        this.refresh.emit();
        this.active = false;
    }

    public onUpdate(e){
        let data = JSON.stringify(this.editForm.value);
        this.alert.alert_loading();
        this.http.get(this.urledit + '/update', data, "Error get save data").subscribe(data => {
            console.log(data);
            if(data["status"] === "success") {
                console.log("saved!");
                this.alert.alert_success("Saved Successfully!!");
            } else {
                this.alert.alert_failed(data["status"]);
            }
        });
        // this.route.navigateByUrl("/hcm/myhome/profile/profile-main");
        this.refresh.emit();
        this.active = false;
    }

    private closeForm() {
        this.cancel.emit();
        this.isNew = false;
        this.active = false;
    }

    

}
