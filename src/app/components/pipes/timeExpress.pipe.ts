import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'timeExpr',

})
export class TimeExpressPipe implements PipeTransform{
  transform(timestamp: any, local?: string, options?: object) {
    let date = timestamp.toLocaleDateString( local || 'en-Us', options || {year: 'numeric',month: 'long', day: 'numeric', weekday: 'long'}) ;

    return date;
  }
}
