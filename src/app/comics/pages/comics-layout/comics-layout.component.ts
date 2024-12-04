import { Component, OnDestroy, OnInit } from '@angular/core';

import { initFlowbite } from 'flowbite';
import { ComicCardComponent } from "../../components/comic-card/comic-card.component";
import { ComicsService } from '../../services/comics.service';
import { ComicsInterface } from '../../interfaces/comics.interface';
import { AuthService } from '../../../auth/Services/auth.service';
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";
import { ComicFavoriteInterface } from '../../interfaces/comic-favorite.interface';
import { Subscription } from 'rxjs';
import { ComicsStateService } from '../../services/comics-state.service';

@Component({
  selector: 'app-comics-layout',
  standalone: true,
  imports: [ComicCardComponent, NavBarComponent],
  templateUrl: './comics-layout.component.html',
  styleUrl: './comics-layout.component.css'
})
export class ComicsLayoutComponent implements OnInit, OnDestroy {

  constructor(
    private comicsService:ComicsService,
    private authService:AuthService,
    private comicStateService: ComicsStateService
  ){}

  private subscription: Subscription = new Subscription();
  

  comics: ComicsInterface[] = []
  favoriteComics:ComicsInterface[] = []

  ngOnInit(): void {
    initFlowbite();
    this.getAllComics();
    this.getAllComicsFavorites();

    this.subscription = this.comicStateService.refreshFavorites$.subscribe(
      shouldRefresh => {
        if (shouldRefresh) {
          this.getAllComicsFavorites();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllComics(){
    this.comicsService.getAllComics().subscribe(
      response =>{
        this.comics=response
      }
    )
  }

  getAllComicsFavorites(){
    const userId = this.authService.getCurrentUser()?._id;
    this.comicsService.getAllComicsFavorites(userId!).subscribe(
      response =>{
        this.favoriteComics=response
      }
    )
  }
}
