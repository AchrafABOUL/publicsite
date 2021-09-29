import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
  hanldeError(error: any) {
    alert('An unexpected error occurred!');
    console.log(error);
  }
}
