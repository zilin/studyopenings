import * as toastr from 'toastr';

export class Toasts {
  static initialize() {
    toastr.options.showDuration = 300;
    toastr.options.hideDuration = 300;
    toastr.options.timeOut = 0;
    toastr.options.extendedTimeOut = 0;
    toastr.options.preventDuplicates = true;
    toastr.options.positionClass = 'toast-top-center';
  }

  static error(title: string, message: string) {
    toastr.error(message, title);
  }

  static warning(title: string, message: string) {
    toastr.warning(message, title);
  }

  static info(title: string, message: string) {
    toastr.info(message, title);
  }
}
