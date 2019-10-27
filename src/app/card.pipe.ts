import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'damdam'
})
export class CardPipe implements PipeTransform{
    
    transform(value:string,num:string){
        
        if(value.length>0){
            return num.match(new RegExp('[0-9]{1,4}', 'g')).join(" ");
          } 
    }
}