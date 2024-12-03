import { Component, Input, OnInit } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';

import { ComicsService } from '../../services/comics.service';
import { ComicsInterface } from '../../interfaces/comics.interface';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/Services/auth.service';
import { ComicFavoriteInterface } from '../../interfaces/comic-favorite.interface';

import { initFlowbite } from 'flowbite';
@Component({
  selector: 'comic-card',
  standalone: true,
  imports: [RouterLink, TabViewModule],
  templateUrl: './comic-card.component.html',
  styleUrl: './comic-card.component.css'
})
export class ComicCardComponent implements OnInit {

  constructor(
    private comicsService:ComicsService,
    private authService:AuthService
  ){}

  ngOnInit(): void {
    // initFlowbite();
    // this.getAllComics();
    // this.getAllComicsFavorites();
  }

  @Input() comics: ComicsInterface[] = []
  // @Input() favoriteComics:ComicsInterface[] = []

  getAllComics(){
    this.comicsService.getAllComics().subscribe(
      response =>{
        this.comics=response
        console.log('estos son los comics', this.comics)
      }
    )
  }

  addComicToFavorite(id:number){
    const user = this.authService.getCurrentUser();

    const comicFavorite:ComicFavoriteInterface = {
      comicid:id,
      userId:user?._id!
    }

    this.comicsService.addComicToFavorite(comicFavorite).subscribe(
      response =>{
        console.log('EL FAVORITO CREADO',response)
      }
    )
  }

  getAllComicsFavorites(){
    const userId = this.authService.getCurrentUser()?._id;
    this.comicsService.getAllComicsFavorites(userId!).subscribe(
      response =>{
        console.log('ESTO ES LO QUE LLEGA TODOS LOS FAVORITOS',response)
      }
    )
  }

}
