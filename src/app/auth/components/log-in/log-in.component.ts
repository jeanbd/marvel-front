import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { LoginInterface } from '../../interfaces/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      username:[''],
      password:['']
    })
  }

  onSubmit(){
    this.authService.logIn(this.loginForm.value).subscribe(
      response =>{
        console.log('esto es lo que devuelve',response)
        this.router.navigate(['/comics-list'])
      }
    )
  }
}
