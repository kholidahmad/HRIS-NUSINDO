import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UiAlertService } from './../../../../apps/core/services/ui/ui-alert.service';
import { HttpService } from './../../../../apps/core/services/http/http.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-health',
  templateUrl: './request-health.component.html',
  styleUrls: ['./request-health.component.css']
})
export class RequestHealthComponent implements OnInit {

  @Input() public urledit = "";
  @Input() public kode = String( this.getRndInteger(100, 999) );

  constructor(
    private http: HttpService,
    private alert: UiAlertService,
    private route: Router
  ) {this.urledit = "/api/healthy_claim/healthy_claim"; }

  ngOnInit(): void {
  }

  public editForm: FormGroup = new FormGroup({
        nik_health: new FormControl('', Validators.required),
        id_keluarga: new FormControl('', Validators.required),
        nama_pegawai: new FormControl('', Validators.required),
        divisi: new FormControl('', Validators.required),
        hasil_checkup: new FormControl('', Validators.required),
        tgl_claim: new FormControl('', Validators.required),
        biaya_claim: new FormControl('', Validators.required),
        bukti_claim: new FormControl('', Validators.required),
        status_claim: new FormControl('', Validators.required)
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
      this.route.navigateByUrl("/hcm/health_claim/report_health");
      // this.refresh.emit();
      // this.active = false;
    }

  public getRndInteger(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
