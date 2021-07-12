import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'capitalizer'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, flag: boolean): string {
    return flag ? value.toUpperCase() : value.toLocaleLowerCase();
  }

}