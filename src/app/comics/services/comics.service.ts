import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ComicsInterface } from '../interfaces/comics.interface';
import { ComicFavoriteInterface } from '../interfaces/comic-favorite.interface';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(
    private httpClient: HttpClient
  ) { }

   readonly baseUrl:string = 'http://localhost:3000';

  getAllComics():Observable<ComicsInterface[]>{
    return this.httpClient.get<ComicsInterface[]>(`${this.baseUrl}/comics/allComics`)
  }

  getComicInfo(id:number):Observable<ComicsInterface[]>{
    return this.httpClient.get<ComicsInterface[]>(`${this.baseUrl}/comics/${id}`)
  }

  addComicToFavorite(comic:ComicFavoriteInterface):Observable<ComicFavoriteInterface>{
    return this.httpClient.post<ComicFavoriteInterface>(`${this.baseUrl}/comics/create-favorite`,comic)
  }

  getAllComicsFavorites(id:string):Observable<ComicsInterface[]>{
    return this.httpClient.get<ComicsInterface[]>(`${this.baseUrl}/comics/comics-favorites/${id}`)

  }
}
