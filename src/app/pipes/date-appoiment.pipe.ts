import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateAppoiment'
})

export class DateAppoimentPipe implements PipeTransform {
    transform(dateInSeconds: number): Date{
        let date = new Date(null);
        date.setTime(dateInSeconds * 1000);
        return date;
    }
}