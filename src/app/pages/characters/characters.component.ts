import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  characters: any = [];
  onSearch: string = '';
  characterSpecies = [
    { name: 'Human' },
    { name: 'Alien' },
    { name: 'Humanoid' },
  ];
  selectedSpecie: string = '';
  first: number = 10;
  rows: number = 10;
  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.getCharacters();
    this.selectedSpecie = this.characterSpecies[0].name;
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe((res) => {
      this.characters = res;
    });
  }

  getResultFilter() {
    this.charactersService
      .getCharacterByFilterByName(this.onSearch)
      .subscribe((res) => {
        this.characters = res;
      });
  }

  getCharacterById() {
    this.charactersService.getCharacterById(this.onSearch).subscribe((res) => {
      this.characters = res;
    });
  }

  getCharacterBySpecies() {
    this.charactersService
      .getCharacterBySpecies(this.selectedSpecie)
      .subscribe((res) => {
        this.characters = res;
      });
  }

  filterValidation() {
    if (this.onSearch.length <= 3) {
      this.getCharacterById();
    }
    if (this.onSearch.length > 3) {
      this.getResultFilter();
    }
    if (this.selectedSpecie.length > 0) {
      this.getCharacterBySpecies();
    }
  }
}
