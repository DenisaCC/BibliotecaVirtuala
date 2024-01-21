import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private messageService: MessageService,
    private router: Router) {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, this.validateFullName]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).{8,}$')
        ]
      ],
      confirmPassword: ['', [Validators.required, this.validatePasswordConfirmation.bind(this)]]
    });
  }

  validateFullName(control: AbstractControl): { [key: string]: boolean } | null {
    const fullName = control.value;
  
    if (!fullName) {
      return { 'required': true };
    }
  
    if (/\d/.test(fullName)) {
      return { 'containsNumbers': true };
    }
  
    if (!fullName.includes(' ')) {
      return { 'noSpace': true };
    }
  
    return null;
  }
  

  validatePasswordConfirmation(control: AbstractControl): { [key: string]: boolean } | null {
    const password = this.signupForm?.get('password')?.value;
    const confirmPassword = control.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
  

  get FullName() {
    return this.signupForm.controls['fullName'];
  }

  get Email() {
    return this.signupForm.controls['email'];
  }

  get Password() {
    return this.signupForm.controls['password'];
  }

  get ConfirmPassword() {
    return this.signupForm.controls['confirmPassword'];
  }

  submitDetails(){
    const postData = {...this.signupForm.value};
    delete postData.confirmPassword;
    this.authService.registerUser(postData as User).subscribe(
      response =>{
        console.log(response);
        this.messageService.add({ severity:'success', summary: 'Succes', detail: 'Register successfully'});
        this.router.navigate(['login'])
      },
      error => {
        this.messageService.add({ severity:'error', summary: 'error', detail: 'Something went wrong'});
      } 
    )
  }
}
