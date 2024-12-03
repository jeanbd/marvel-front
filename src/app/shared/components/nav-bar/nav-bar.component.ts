import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/Services/auth.service';
import { UserInterface } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
constructor(
  private authService:AuthService
){}

get UserLogged():UserInterface|undefined{
  return this.authService.getCurrentUser()
}

logOut(){
  this.authService.logOut()
}

}
