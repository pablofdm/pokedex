import { Injectable, Injector } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import {
    NgSimpleStateBaseStore,
    NgSimpleStateStoreConfig,
} from 'ng-simple-state';

export interface PokeListState {
    pokeListState: Array<Pokemon>;
}


@Injectable({
    providedIn: 'root'
})

export class PokeStore extends NgSimpleStateBaseStore<Pokemon[]> {

    constructor(
        injector: Injector,
    ) {
        super(injector);
    }

    storeConfig(): NgSimpleStateStoreConfig {
        return {
            storeName: 'PokeStore',
        };
    }

    initialState(): Array<Pokemon> {
        return new Array<Pokemon>();
    }

    update(pokemon: Array<Pokemon>) {
        this.setState(() => pokemon);
    }

}

