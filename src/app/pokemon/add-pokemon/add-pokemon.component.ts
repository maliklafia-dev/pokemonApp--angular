import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pokemon',
  template: `
  <h2 class="center">Ajouter un pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"><app-pokemon-form>
  `,
})
export class AddPokemonComponent implements OnInit{
  pokemon: Pokemon;
  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ){}

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
