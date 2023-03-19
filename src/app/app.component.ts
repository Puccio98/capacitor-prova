import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _http: HttpClient,
  ) {
  }

  title = 'capacitor-prova';

  pokemon: any = 'pichu';
  film: any = 'quel film dove fanno a botte';
  loginData: any = 'dati del login';
  welcomeText: any = 'tutorial spagnolo';
  error: any = {message: ''};

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

  getLogin() {
    this._http.post('https://gymhubbe-production.up.railway.app/auth/login', {email: 'test@test.com', password: 'Alessandro12'}).subscribe(
      {
        next: (value: any) => {
          this.loginData = value?.tokenDto.accessToken;
        },
        error: (err: any) => {
          console.log(err);
          this.error = err;
        }
      }
    )
  }

  getWelcome() {
    this._http.post('https://backendprova-production.up.railway.app/welcome', {username: "pippo"}).subscribe(
      {
        next: (value: any) => {
          this.welcomeText = value;
        },
        error: (err: any) => {
          console.log(err);
          this.error = err;
        }
      }
    )
  }


  /*getWelcomeIonic() {
    this._ionic_http.post('https://backendprova-production.up.railway.app/welcome', {username: "pippo"}, {})
      .then(data => {
        this.welcomeText = data;
      })
      .catch(error => {
        console.log(error);
        this.error = error;
      });
  }*/
}


