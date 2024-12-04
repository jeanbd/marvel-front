import { Component, OnInit } from '@angular/core';
import { LogInComponent } from "../../components/log-in/log-in.component";
import { SignUpComponent } from "../../components/sign-up/sign-up.component";

import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [LogInComponent, SignUpComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
