import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector:'app-hero',
    templateUrl:'./hero.component.html'
})

export class HeroComponent implements OnInit {
    
    hero:Hero = {
        name:'',
        bio:'',
        house:'Marvel'
    }


		constructor( private _heroesService:HeroesService, 
								 private _router:Router){
    
    }

    ngOnInit() {
        
    }

    saveHero(){
			 this._heroesService.newHero(this.hero)
			 	.subscribe( data => {
					this._router.navigate(['/hero', data.name]);
				}, ( e ) => {
					console.error(e);
				});
			}

    /**
     *JSON.stringify(object): Funcion que permite convertir un objeto a un string
     *JSON.parse(objectString): Función que nos permite convertir un string a un objeto.
     */ 

}