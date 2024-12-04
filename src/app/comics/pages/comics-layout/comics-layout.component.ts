import { Component, OnInit } from '@angular/core';

import { initFlowbite } from 'flowbite';
import { ComicCardComponent } from "../../components/comic-card/comic-card.component";
import { ComicsService } from '../../services/comics.service';
import { ComicsInterface } from '../../interfaces/comics.interface';
import { AuthService } from '../../../auth/Services/auth.service';
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-comics-layout',
  standalone: true,
  imports: [ComicCardComponent, NavBarComponent],
  templateUrl: './comics-layout.component.html',
  styleUrl: './comics-layout.component.css'
})
export class ComicsLayoutComponent implements OnInit {

  constructor(
    private comicsService:ComicsService,
    private authService:AuthService
  ){}

  comics: ComicsInterface[] = []
  favoriteComics:ComicsInterface[] = []

  ngOnInit(): void {
    initFlowbite();
    this.getAllComics();
    this.getAllComicsFavorites();
  }

  getAllComics(){
    this.comicsService.getAllComics().subscribe(
      response =>{
        this.comics=response
        console.log('estos son los comics', this.comics)
      }
    )
  }

  getAllComicsFavorites(){
    const userId = this.authService.getCurrentUser()?._id;
    this.comicsService.getAllComicsFavorites(userId!).subscribe(
      response =>{
        console.log('ESTO ES LO QUE LLEGA TODOS LOS FAVORITOS',response)
        this.favoriteComics=response
      }
    )
  }
}
