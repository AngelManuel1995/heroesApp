import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector:'app-heroes',
	templateUrl:'./heroes.component.html'
})

export class HeroesComponent{
    
	test:string = "it works";

	heroes:any

	constructor(private _heroesService:HeroesService){
		
		this._heroesService.getHeroes()
			.subscribe( data => {
				console.log(data)
				this.heroes = data;
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