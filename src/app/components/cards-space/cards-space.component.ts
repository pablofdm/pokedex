import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke-service.service';
import { PokeStore } from 'src/app/store/app.state';

@Component({
  selector: 'poke-cards-space',
  templateUrl: './cards-space.component.html',
  styleUrls: ['./cards-space.component.css']
})
export class CardsSpaceComponent implements OnInit {
  page: any = 1;

  constructor(public pokeService: PokeService, public pokeStore: PokeStore) {
  }

  ngOnInit(): void {
    this.checkChange();
  }

  checkChange() {
    this.pokeService.getPokemonList();
  }
}