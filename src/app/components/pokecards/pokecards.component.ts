import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ComentaryModel } from 'src/app/models/cometary.mode';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokeService } from 'src/app/services/poke-service.service';
import { PokeStore } from 'src/app/store/app.state';

@Component({
  selector: 'pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.css']
})
export class PokecardsComponent implements OnInit {
  @Input() pokeData: any;
  @ViewChild('pokeDialog') pokeDialog: HTMLElement;
  @ViewChild('coment') coment: HTMLElement;

  constructor(private pokeService: PokeService, public pokeStore: PokeStore) {
  }

  ngOnInit(): void {
  }

  favoritePokemon(id: number) {
    this.pokeService.updateFavorite(id);
  }

  formattedName(name: string): string {
    return name ?
      name[0].toUpperCase() + name.substr(1) : "";
  }

  saveComent(coment: string, pokeData: Pokemon): void {
    const comentary = new ComentaryModel();
    comentary.comentary = coment;
    comentary.id = Math.floor(Math.random() * 25);
    this.pokeService.updateComent(pokeData.id, comentary);
    this.coment.setAttribute('value', '');
  }

  deleteComent(id: number, idComent: number) {
    this.pokeService.deleteComent(id, idComent);
  }

  getPokemonImg(id: number): string {
    return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
  }
}
