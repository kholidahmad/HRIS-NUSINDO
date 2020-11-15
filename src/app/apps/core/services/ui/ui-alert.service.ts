import {EventEmitter, Injectable, Output} from '@angular/core';
import swal, {SweetAlertResult} from 'sweetalert2';
import {Observable} from 'rxjs/Rx';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UiAlertService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
    alert_loading() {
        swal.fire({
            title:"Loading",
            onBeforeOpen: () => {
                swal.showLoading();
            },
            allowOutsideClick:false
        });
    }
    alert_failed(message:string) {
        swal.fire("Warning!", message, "warning");
    }
    alert_success(message:string) {
        swal.fire("Good job!", message, "success");
    }
    close_all_loading_and_message() {
        setTimeout(function() {
            swal.close();
        }, 2000);
    }
    alert_confirm(message:string = "Apakah yakin ingin menghapus?") {
        return swal.fire({
            title: 'Yakin?',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
        });
    }
}
