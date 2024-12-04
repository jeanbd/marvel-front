import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

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
  private authService: AuthService,
  private router:Router
 ){
  this.signForm = fb.group({
    name:['', [Validators.required]],
    username:['', [Validators.required, Validators.minLength(4)]],
    password:['', [Validators.required]],
    confirmPassword:['', [Validators.required]]
  })
 }

 onSubmit(){
  const {confirmPassword, ...dataUser} = this.signForm.value
  
  this.authService.signUp(dataUser).subscribe(
    response =>{
      if(response == null || response == undefined){
        this.showAlert(false)
        return
      }
      this.showAlert(true)
      // this.router.navigate(['/home'])
      this.signForm.reset();
    }
  )
 }

 showAlert(succes : boolean){

  if(succes == true){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Sign up succesfull",
      showConfirmButton: false,
      timer: 1800
    });
  }

  if(succes == false){
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Cannot sign up in this moment",
      showConfirmButton: false,
      timer: 1800
    });
  }

  
}

 
  
}
