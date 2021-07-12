import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'luis fernández'
  nameUpper: string = 'LUIS FERNÁNDEZ'
  nameWrong: string = 'lUis fErnÁnDEz'
  date: Date = new Date()

  constructor() { }

}
