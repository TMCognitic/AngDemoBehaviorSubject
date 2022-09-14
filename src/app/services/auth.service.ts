import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isConnectedSub : BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  get IsConnectedSub() : BehaviorSubject<Boolean>
  {
    return this._isConnectedSub;
  }

  constructor() { 
  }

  login()
  {
    console.log("change value to true");
    //récupère de l'api
    //tu met resultat en session storage
    this._isConnectedSub.next(true);
  }

  logout()
  {
    console.log("change value to false");
    //tu vides le local storage
    this.IsConnectedSub.next(false);
  }
}
