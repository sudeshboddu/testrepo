import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CHARACTERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class AdventureTimeService {

  constructor() { }


getCharacters(){
  return CHARACTERS;
}
getColumns(): string[]{
  return ["Search(Auto Complete)"]};


}
