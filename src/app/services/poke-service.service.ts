import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { PokeStore } from '../store/app.state';
import { ComentaryModel } from '../models/cometary.mode';

@Injectable({
  providedIn: 'root'
})

export class PokeService {
  apiUrl: string = "https://pokeapi.co/api/v2/pokedex/2/";
  AllPokes: Array<Pokemon>;
  AllPokesAuxiliaryList: Array<Pokemon>;

  constructor(private http: HttpClient, public pokeStore: PokeStore) {
  }

  public updateFavorite(id: number) {
    let isFavorite: boolean = this.AllPokes.find(poke => poke.id == id)!.isFavorite == false ? true : false;
    this.AllPokes.find(poke => poke.id == id)!.isFavorite = isFavorite;
    this.AllPokes = this.AllPokes;
    this.pokeStore.update(this.AllPokes);
  }

  public updateComent(id: number, comentary: ComentaryModel) {
    let size = this.AllPokes.find(poke => poke.id == id)!.coments?.length
    if (size! < 3)
      this.AllPokes.find(poke => poke.id == id)!.coments!.push(comentary);
    else
      window.alert('Máximo 3 comentários');
    this.AllPokes = this.AllPokes;
    this.pokeStore.update(this.AllPokes);
  }

  public deleteComent(id: number, idComent: number) {
    let filter: Array<ComentaryModel> = this.AllPokes[id - 1].coments!.filter(comentary => comentary.id != idComent);
    this.AllPokes[id - 1].coments = filter;
    this.pokeStore.update(this.AllPokes);
  }

  public getPokemonList(): any {
    const allPokemons: Pokemon[] = [];
    const url = `${this.apiUrl}`;
    this.http.get(url)
      .toPromise()
      .then((res: any) => {
        let data = res;
        data.pokemon_entries.forEach((entry: any) => {
          let pokemon = new Pokemon();
          pokemon.name = entry.pokemon_species.name;
          pokemon.isFavorite = false;
          pokemon.coments = [];
          pokemon.id = entry.entry_number;
          allPokemons.push(pokemon);
        });
      })
      .catch(this.handleError);
    if (this.pokeStore.getCurrentState()[0] != null) {
      this.AllPokes = this.pokeStore.getCurrentState();
      this.AllPokesAuxiliaryList = this.pokeStore.getCurrentState();
    } else {
      this.AllPokes = allPokemons;
      this.AllPokesAuxiliaryList = allPokemons;
    }
  }

  private handleError(error: any): Promise<any> {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Promise.reject(errMsg);
  }
}

