import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector:'app-heroes',
	templateUrl:'./heroes.component.html'
})

export class HeroesComponent{
    
	test:string = "it works";

	heroes:any;
	loading:boolean = true;
	constructor(private _heroesService:HeroesService){
		
		this._heroesService.getHeroes()
			.subscribe( data => {
				this.heroes = data;
				this.loading = false;
				// setTimeout( () => {
				// 	this.heroes = data;
				// 	this.loading = false;
				// },2000)
			})
			
	}

	deleteHero( key$:string ){
		this._heroesService.removeHero( key$ )
			.subscribe( data => {
				if(data){
					console.error(data)
				}else{
					delete this.heroes[key$]
				}
			})
	}

}