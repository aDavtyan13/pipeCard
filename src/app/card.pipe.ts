import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'damdam'
})
export class CardPipe implements PipeTransform{
    transform(value:string) {
        if(value){
            // return num.match(new RegExp('[0-9]{1,4}', 'g')).join(" ");
            return value.replace(/\d{4}/g,(item) => {
                return item + ' ';
            })
        } 
    }
}