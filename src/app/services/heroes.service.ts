import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import 'rxjs/Rx';
@Injectable()

export class HeroesService{
 

    heroesURL:string = 'https://heroesapp-ceff9.firebaseio.com/heroes.json';
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

}