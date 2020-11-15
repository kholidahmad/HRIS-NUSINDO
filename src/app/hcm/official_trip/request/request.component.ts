import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../apps/core/services/http/http.service';
import {UiAlertService} from '../../../apps/core/services/ui/ui-alert.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

    @Input() public urledit = "";
    @Input() public kode = String( this.getRndInteger(100, 999) );
    constructor(private http: HttpService,
      private alert: UiAlertService,
      private route: Router) {
        this.urledit = "/api/officialtrip/sppd_data";
    }

    ngOnInit(): void {

    }

    public editForm: FormGroup = new FormGroup({
        id: new FormControl('', Validators.required),
        kode_sppd: new FormControl('', Validators.required),
        nip: new FormControl('', Validators.required),
        tgl_berangkat: new FormControl('', Validators.required),
        tgl_selesai: new FormControl('', Validators.required),
        tujuan_perjalanan: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        keterangan: new FormControl('',Validators.required)
    });

    public onSave(e) {
      let data = JSON.stringify(this.editForm.value);
      // alert(data);
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
      this.route.navigateByUrl("/hcm/official_trip/request");
      // this.refresh.emit();
      // this.active = false;
    }

    public getRndInteger(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }


}
