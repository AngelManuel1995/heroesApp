import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


//Components 
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroComponent} from './componentes/heroes/hero.component';


//pipes
import { KeyPipe } from './pipes/keys.pipe';
//Routing
import { APP_ROUTING } from './app.routes';

//Services 
import { HeroesService } from './services/heroes.service'
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    KeyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
