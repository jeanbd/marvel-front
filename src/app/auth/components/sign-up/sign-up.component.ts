import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signForm:FormGroup;

 constructor(
  private fb : FormBuilder,
  private authService: AuthService
 ){
  this.signForm = fb.group({
    name:['', [Validators.required]],
    username:['', [Validators.required, Validators.minLength(4)]],
    password:['', [Validators.required]],
    confirmPassword:['', [Validators.required]]
  })
 }

 onSubmit(){

  console.log('formulario invalid:', this.signForm.controls['username'].errors)

  // const {confirmPassword, ...dataUser} = this.signForm.value
  
  // this.authService.signUp(dataUser).subscribe(
  //   response =>{
  //     console.log('este es el response del post',response)
  //   }
  // )
 }

 
  
}
