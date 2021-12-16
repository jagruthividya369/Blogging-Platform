import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const textLimit = args.length > 0 ? parseInt(args[0], 15) : 15;
    // console.log(args.length);
    const suffix = args.length > 1 ? args[1] : '...read more';
    return value.length > textLimit ? value.substring(0, textLimit) + suffix : value;
  }

}
