import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup = new FormGroup({});
  validationErrors: string[] | undefined;

  constructor(private accountService: AccountService, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  register() {
    this.registerForm.markAllAsTouched();

    this.accountService.register(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/')
      },
      error: error => {
        this.validationErrors = error
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
