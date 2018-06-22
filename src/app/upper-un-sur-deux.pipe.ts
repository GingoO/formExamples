import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperUnSurDeux'
})
export class UpperUnSurDeuxPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) {
      return "";
    }
    let valueArray = value.split("");
    let output: string = "";
    for (const indexLetter in valueArray) {
      if(parseInt(indexLetter) % 2 === 0) {
        output += valueArray[indexLetter].toUpperCase();
      } else {
        output += valueArray[indexLetter].toLowerCase();
      }
    }
    return output;
  }

}
