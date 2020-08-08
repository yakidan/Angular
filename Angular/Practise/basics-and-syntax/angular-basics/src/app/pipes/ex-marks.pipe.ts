import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'exMarks'
})
//create pipe by ng
//ng g p pipes/ex-marks --skipTests
export class ExMarksPipe implements PipeTransform {

  transform(str: string): string {
    return `${str.trim()}!!!!`
  }

}
