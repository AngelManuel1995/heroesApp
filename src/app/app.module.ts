import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//Components 
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroComponent} from './componentes/heroes/hero.component';


//Routing
import { APP_ROUTING } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
