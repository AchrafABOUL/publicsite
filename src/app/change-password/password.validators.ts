import {
  AbstractControl,
  Form,
  FormControl,
  ValidationErrors
} from "@angular/forms";
const OLD_PASSWORD = '1234';
export class PasswordValidators {
  static matchOldPassword(control: AbstractControl): Promise < ValidationErrors | null > {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (control.value !== OLD_PASSWORD) {
            resolve({
              badOldPassword: true
            });
          } else {
            resolve(null);
          }
        },
        2000);
    });
  }
  static differentNewPassword(control: AbstractControl): Promise < ValidationErrors | null > {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (control.value === OLD_PASSWORD) {
            resolve({
              sameNewPassword: true
            });
          } else {
            resolve(null);
          }
        },
        2000);
    });
  }
  static passwordsShouldMatch(group: AbstractControl): ValidationErrors | null {
    let newPassword = group.get('newPassword') as FormControl;
    let confirmPassword = group.get('confirmPassword') as FormControl;
    if (newPassword.value !== confirmPassword.value) {
      return {
        passwordNotMatching: true
      }
    }
    return null;
  }
}
