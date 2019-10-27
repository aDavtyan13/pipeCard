import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardPipeComponent } from './card-pipe/card-pipe.component'



const routes: Routes = [
  // { path: '',component: AppComponent },
  { path: 'dam',component: CardPipeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }