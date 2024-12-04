import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { LoginInterface } from '../../interfaces/login.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2'

@Component({
  selector: 'log-in',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginForm:FormGroup
  constructor(
    private authService:AuthService,
    private router: Router,
    private fb:FormBuilder
  ){
    this.loginForm = fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(){
    this.authService.logIn(this.loginForm.value).subscribe(
      response =>{
        if(!response._id){
          this.showAlert(false)
          return
        }
        this.router.navigate(['/comics-list'])
      }
    )
  }

  showAlert(succes : boolean){

    if(succes == true){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login succesfull",
        showConfirmButton: false,
        timer: 1800
      });
    }
  
    if(succes == false){
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Incorrect credentials",
        showConfirmButton: false,
        timer: 1800
      });
    }
  
    
  }
  
}
