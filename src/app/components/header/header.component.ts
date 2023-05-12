import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UnsubscribeOnDestroyAdapter } from 'src/app/adapters/unsubs-ondestroy.adpter';
import { PokeService } from 'src/app/services/poke-service.service';
import { SubSink } from 'subsink';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  pokeForm: FormGroup;
  subs: SubSink;

  constructor(private formBuilder: FormBuilder, private pokeService: PokeService) {

    super();
    this.createContactForm();
    this.subs.add(this.pokeForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe((term) => {
        let name: string = term.name;
        let all: Array<Pokemon> = this.pokeService.AllPokes;
        this.pokeService.AllPokes = all.filter(poke => poke.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
      }));
  }

  ngOnInit(): void {
  }

  resetList(): void {
    let name: string = this.pokeForm.controls['name'].value;
    this.pokeService.AllPokes = this.pokeService.AllPokesAuxiliaryList.filter(poke => poke.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

  createContactForm() {
    this.pokeForm = this.formBuilder.group({
      name: [''],
    });
  }
}
