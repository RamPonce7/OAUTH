import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-modal',
  templateUrl: './forgot-modal.component.html',
  styleUrls: ['./forgot-modal.component.css']
})
export class ForgotModalComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() {
    this._snackBar.openFromComponent(EmailSentComponent, {
      duration: 2000,
    });
  }

}

@Component({
  selector: 'email-sent-snack',
  template: `<span>Email sent</span>`,

})
export class EmailSentComponent { }
