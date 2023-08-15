import { Injectable } from '@angular/core';
import { StatusBarComponent } from '../components/status-bar/status-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  statusBarComponent:StatusBarComponent;

  constructor() { }





  onShowStatus(message:string){
     this.statusBarComponent.onShowStatus(message);
  }
}
