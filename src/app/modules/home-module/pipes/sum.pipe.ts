import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'sum',
  pure: false
})
export class SumPipe implements PipeTransform{
  transform(array: number[]) {
    let result = 0;
    if (array.length === 0)result;
    else {
      array.forEach((el:number) =>{
        result += el;
      })
    }
    return result
  }
}
