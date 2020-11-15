import swal from 'sweetalert2';

export class UiAlert {

    alert_loading() {
        swal({
            title:"Loading",
            onBeforeOpen: () => {
                swal.showLoading();
            },
            allowOutsideClick:false
        });
    }
    alert_failed(message:string) {
        swal("Warning!", message, "warning");
    }
    alert_success(message:string) {
        swal("Good job!", message, "success");
    }
    close_all_loading_and_message() {
        swal.close();
    }
}