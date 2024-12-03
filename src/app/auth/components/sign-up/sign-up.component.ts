import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
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
    name:[''],
    username:[''],
    password:['']
  })
 }

 onSubmit(){
  this.authService.signUp(this.signForm.value).subscribe(
    response =>{
      console.log('este es el response del post',response)
    }
  )
 }

 
  
}
