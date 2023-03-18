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

  pokemon: any = 'pippo';
  error: any = {message: 'error'}

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
}


