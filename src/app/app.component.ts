import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { ComicCardComponent } from "./comics/components/comic-card/comic-card.component";
import { ComicInfoComponent } from "./comics/components/comic-info/comic-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ComicCardComponent, ComicInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marvel-front';
}
