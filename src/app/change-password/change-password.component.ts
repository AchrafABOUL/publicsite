import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.matchOldPassword),
    newPassword: new FormControl('', Validators.required, PasswordValidators.differentNewPassword),
    confirmPassword: new FormControl('', [Validators.required])
  },
  PasswordValidators.passwordsShouldMatch);
  get oldPassword() : FormControl{
    return this.form.get('oldPassword') as FormControl;
  }
  get newPassword() : FormControl{
    return this.form.get('newPassword') as FormControl;
  }
  get confirmPassword() : FormControl{
    return this.form.get('confirmPassword') as FormControl;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
