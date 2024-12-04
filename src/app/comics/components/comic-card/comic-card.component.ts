import { Component, EventEmitter, Input, OnInit, output, Output } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import Swal from 'sweetalert2'

import { ComicsService } from '../../services/comics.service';
import { ComicsInterface } from '../../interfaces/comics.interface';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/Services/auth.service';
import { ComicFavoriteInterface } from '../../interfaces/comic-favorite.interface';
import { ComicsStateService } from '../../services/comics-state.service';

// import { initFlowbite } from 'flowbite';
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
    private authService:AuthService,
    private comicStateService:ComicsStateService
  ){}

  ngOnInit(): void {
    // initFlowbite();
    // this.getAllComics();
    // this.getAllComicsFavorites();
  }

  @Input() comics: ComicsInterface[] = []
  // @Input() favoriteComics:ComicsInterface[] = []
  @Input() showFavoriteButton:boolean = true;
  loader:boolean=true;

  // @Output() updateFavorites: EventEmitter<void> = new EventEmitter<void>();

  getAllComics(){
    this.comicsService.getAllComics().subscribe(
      response =>{
        this.comics=response
      }
    )
  }

  addComicToFavorite(id:number){
    const user = this.authService.getCurrentUser();

    const comicFavorite:ComicFavoriteInterface = {
      comicId:id,
      userId:user?._id!
    }

    this.comicsService.addComicToFavorite(comicFavorite).subscribe(
      response =>{
        if(!response.comicId && !response.userId){
          this.showAlert(false);
        }else{
          this.showAlert(true);
          this.comicStateService.triggerRefreshFavorites();

        }

      }
    )
  }

  getAllComicsFavorites(){
    const userId = this.authService.getCurrentUser()?._id;
    this.comicsService.getAllComicsFavorites(userId!).subscribe(
      response =>{
      }
    )
  }
  
  showAlert(succes : boolean){

    if(succes == true){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "This comic has been added as favorite",
        showConfirmButton: false,
        timer: 1800
      });
    }

    if(succes == false){
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "This comic already has been added as favorite",
        showConfirmButton: false,
        timer: 1800
      });
    }

    
  }

}
