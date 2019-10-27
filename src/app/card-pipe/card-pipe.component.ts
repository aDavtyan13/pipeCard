import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-pipe',
  templateUrl: './card-pipe.component.html',
  styleUrls: ['./card-pipe.component.css']
})
export class CardPipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  numberOnly(event){
   
    var code = event.keyCode;
    if(code > 47 && code < 57){
      return true;
    }
    return false;

  }

}
