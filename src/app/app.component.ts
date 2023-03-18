import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _http: HttpClient
  ) {
  }

  title = 'capacitor-prova';

  pokemon: any = 'pichu';
  film: any = 'quel film dove fanno a botte'
  error: any = {message: ''}

  getPokemon() {
    this._http.get('https://pokeapi.co/api/v2/pokemon/pikachu').subscribe(
      {
        next: (value: any) => {
          this.pokemon = value?.name;
        },
        error: (err: any) => {
          debugger;
          console.log(err);
          this.error = err;
        }
      }
    );
  }

  getMovie() {
    this._http.get('https://api.themoviedb.org/3/movie/550?api_key=71ecc453a944c124eec62758388062c1').subscribe(
      {
        next: (value: any) => {
          this.film = value?.original_title;
        },
        error: (err: any) => {
          debugger;
          console.log(err);
          this.error = err;
        }
      }
    );
  }
}


