import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsStateService {

  constructor() { }

  private refreshFavorites = new BehaviorSubject<boolean>(false);
  refreshFavorites$ = this.refreshFavorites.asObservable();

  triggerRefreshFavorites() {
    this.refreshFavorites.next(true);
  }
}
