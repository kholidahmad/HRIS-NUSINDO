import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {EditKendoModel} from './edit-kendo-model';
import {statusDataItem} from '../const/statusItem';
//import {Item} from '@progress/kendo-angular-grid/dist/es2015/data/data.iterators';
import {HttpService} from '../../apps/core/services/http/http.service';

@Component({
  selector: 'app-edit-kendo-table',
  templateUrl: './edit-kendo-table.component.html',
  styleUrls: ['./edit-kendo-table.component.scss']
})

export class EditKendoTableComponent implements OnInit {

    public listItemsStatus = statusDataItem;
    public selectedItemStatus = 'nonaktif';
    public max_width = 200;

    public styleInputForm = {
        'max-width.px':200,
        'float':'left',
        'margin-right.px':30
    };

    public editForm: FormGroup = new FormGroup({
        kd_jabatan: new FormControl(),
        nama_jabatan: new FormControl('', Validators.required),
        status: new FormControl(0)
    });


    public statusItem:any = [{
        value:'aktif',
        text:'Aktif'
    },{
        value:'nonaktif',
        text:'NonAktif'
    }];

    @Input() public isNew = false;
    @Input() public active = false;

    @Output() save: EventEmitter<EditKendoModel> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();

    constructor( public http: HttpService ) {

    }

    ngOnInit() {
    }

    @Input() public set model(dataEdit: EditKendoModel) {
        this.editForm.reset(dataEdit);

        this.active = dataEdit !== undefined;
    }

    public selectChange() {
        alert(this.selectedItemStatus)
    }

    public set_data_edit(dataEdit: EditKendoModel) {
      this.editForm.reset(dataEdit);
    }
    public onSave(e): void {
        console.log(this.editForm);
        this.save.emit(this.editForm.value);
        this.active = false;
    }

    public onCancel(e): void {
        e.preventDefault();
        this.cancel.emit();
    }

    private closeForm(): void {
        this.active = false;
    }


}
