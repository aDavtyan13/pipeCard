import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPipe } from './card.pipe';
import { CardPipeComponent } from './card-pipe/card-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    CardPipeComponent,
    CardPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
