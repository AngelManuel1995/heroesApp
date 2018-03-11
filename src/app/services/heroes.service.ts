import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import 'rxjs/Rx';
@Injectable()

export class HeroesService{
 

	heroesURL:string = 'https://heroesapp-ceff9.firebaseio.com/heroes.json';
	heroUrl:string = 'https://heroesapp-ceff9.firebaseio.com/heroes/';
	
	constructor( private _http:Http ){

	}

	newHero( hero:Hero ){
		let body = JSON.stringify( hero );
		let headers = new Headers( {
				'Content-Type':'application/json'
		});

		return this._http.post( this.heroesURL, body, {headers} )
			.map( res => {
				return res.json();
			});
	}

	//Update hero
	updateHero( hero:Hero, key$:String ){
		let url = `${this.heroUrl}/${key$}.json`;
		let body = JSON.stringify( hero );
		let headers = new Headers({
			'Content-Type':'application/json'
		})

		return this._http.put( url, body, {headers} )
		.map( res => {
			console.log(res.json())
			return res.json();
		})
	}

}
/**
 * Anotaciones:
 * 
 * Recapitulando estonces, para porder hacer los servicion en Angular, lo primero que debemos hacer
 * es importar los módulos de Http y Headers, ya que estos son los que nos permitiran hacer operaciones
 * a la base de datos.
 * Inyectamos el una variable http privada para porder usarla.
 * Debemos tener en cuenta que para hacer operaciones a la base de datos con la librearia http, para este caso
 * el método post recibirá la url,  un objeto que se creará en la base de datos; pero es importante saber que 
 * lo debemos enviar como string, para lo cual vamos a usar JSON.stringify(objeto) para poder enviarlo,
 * y el parametro final son los header donde le indicamos que tipo de peticion será.
 * 
 * 
 */