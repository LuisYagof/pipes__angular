import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  upperFlag: boolean = true;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      flies: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flies: false,
      color: Color.black
    },
    {
      name: 'Robin',
      flies: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      flies: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      flies: true,
      color: Color.green
    },
  ]

  toggleUpper() {
    this.upperFlag = !this.upperFlag
  }

  changeOrder(value: string) {
    this.orderBy = value;
    console.log(value);

  }

}
