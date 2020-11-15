import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-emp-upload-photo',
  templateUrl: './emp-upload-photo.component.html',
  styleUrls: ['./emp-upload-photo.component.scss']
})
export class EmpUploadPhotoComponent implements OnInit {
    
    public opened = true;
    public uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
    

    constructor() { }
  
    ngOnInit() {
    }
    
    
    @Input() public set data(opened_status: boolean) {
      this.opened = true;
        console.log("rerere");
        //this.editForm.reset(dataEdit);
        //this.active = dataEdit !== undefined;
    }
    
    public close(status) {
        //console.log(`Dialog result: ${status}`);
        this.opened = false;
    }
    
    public open() {
        this.opened = true;
    }

}
