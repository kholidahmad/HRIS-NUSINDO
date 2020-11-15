import { Component, OnInit } from '@angular/core';
//import {number} from 'ng2-validation/dist/number';

@Component({
    selector: 'app-emp-profile-page',
    templateUrl: './emp-profile-page.component.html',
    styleUrls: ['./emp-profile-page.component.scss']
})

export class EmpProfilePageComponent implements OnInit {

    //Variable Declaration
    currentPage = "About";
    disableEdit = true;
    disableButtonEdit = false;
    disableButtonSave = true;
    dataEdit = [{name:"Pardomuan Raja Harahap",
                    birthday:"1990-07-27",
                    nik:"2015301001",
                    address:"Jl. Serasi 2 no.98 RT.01 Rw.01 Kel. Sukajadi Kec. Talang Kelapa, Banyuasin",
                    birthplace:"Padang Sidempuan",
                    gender: "male",
                    email: "raja.if07@gmail.com",
                    mobilephone:"085368834543",
                    religion:"islam",
                    tmt_sk:"2015-01-01",
                    mbt_sk:"2070-09-01",
                    pensiun_sk:"2071-01-01",
                    bpjs_ket:"123123123123",
                    bpjs_kes:"435343433232",
                    npwp:"123243232422324",
                    dplk:"2343234565556",
                    noktp:"16071027070900004"}];
    public valueBirthday: Date ;
    public valueTmtSk: Date ;
    public valueMbtSk: Date ;
    public valuePensiunSk: Date ;
    public opened = false;

    ngOnInit() {
        // Horizontal Timeline js for user timeline
       // $.getScript('./assets/js/vertical-timeline.js');
        this.convertValueJSONStringToDate();
    }

    public convertValueJSONStringToDate() {
        this.valueBirthday = this.dataEdit[0].birthday!==''?this.ConvertStringToDate(this.dataEdit[0].birthday):null;
        this.valueTmtSk = this.dataEdit[0].tmt_sk!==""?this.ConvertStringToDate(this.dataEdit[0].tmt_sk):null;
        this.valueMbtSk = this.dataEdit[0].mbt_sk!==""?this.ConvertStringToDate(this.dataEdit[0].mbt_sk):null;
        this.valuePensiunSk = this.dataEdit[0].pensiun_sk!==""?this.ConvertStringToDate(this.dataEdit[0].pensiun_sk):null;
    }

    public convertValueDatetoJSONString() {
        this.dataEdit[0].birthday = this.ConvertDateToString(this.valueBirthday);
        this.dataEdit[0].tmt_sk = this.ConvertDateToString(this.valueTmtSk);
        this.dataEdit[0].mbt_sk = this.ConvertDateToString(this.valueMbtSk);
        this.dataEdit[0].pensiun_sk = this.ConvertDateToString(this.valuePensiunSk);
    }

    public edit() {
        this.disableEdit = false;
        this.disableButtonEdit = true;
        this.disableButtonSave = false;
    }

    public save() {
        this.disableEdit = true;
        this.disableButtonEdit = false;
        this.disableButtonSave = true;
    }

    public ConvertStringToDate(datex: string) {
        let xxx:any = datex.split("-");

        return new Date(xxx[0], xxx[1], xxx[2]);
    }

    public ConvertDateToString(datex: Date) {
        return datex.getFullYear()+"-"+this.checkToDigitsDate(datex.getMonth())+"-"+this.checkToDigitsDate(datex.getDay());
    }

    public checkToDigitsDate(dateNumber: Number) {
        if(dateNumber.toString().length > 1) {
            return dateNumber;
        } else {
            return "0"+dateNumber.toString();
        }
    }

    showPage(page: string) {
        this.currentPage = page;
    }

    public openUpload() {
        this.opened = true;
    }
}