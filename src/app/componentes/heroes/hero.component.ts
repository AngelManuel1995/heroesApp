import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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

		id:string;
		nuevo:boolean = false;

		constructor( private _heroesService:HeroesService, 
								 private _router:Router,
								 private _activatedRoute:ActivatedRoute){
		
			 this._activatedRoute.params
				.subscribe( parametros => this.id = parametros['id'] )
    }

    ngOnInit() {
        
    }

    saveHero(){

			if( this.id === 'nuevo'){
				this._heroesService.newHero(this.hero)
					.subscribe( ( data ) => {
					 this._router.navigate(['/hero', data.name]);
				 }, ( e ) => {
					 console.error(e);
				 });
			}else{
				this._heroesService.updateHero(this.hero, this.id)
				.subscribe( ( data ) => {
					console.log(data)
				}, ( e ) => {
					console.log(e)
				})
			}
		}

    /**
     *JSON.stringify(object): Funcion que permite convertir un objeto a un string
     *JSON.parse(objectString): Función que nos permite convertir un string a un objeto.
     */ 

}