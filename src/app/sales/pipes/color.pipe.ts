import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number): string {
    return Color[value]
  }

}

// export class ColorPipe implements PipeTransform {

//   transform(value: number): string {
//     switch (value) {
//       case 1:
//         return 'red'
//       case 2:
//         return 'black'
//       case 3:
//         return 'blue'
//       case 4:
//         return 'green'
//       default:
//         return ''
//     };
//   }

// }
