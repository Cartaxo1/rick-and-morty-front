import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

export interface ApiResponse {
  info?: IInfo;
  results?: ICharacter[];
}

export interface IInfo {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
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
    { name: 'All', value: '' },
    { name: 'Human', value: 'human' },
    { name: 'Alien', value: 'alien' },
    { name: 'Humanoid', value: 'humanoid' },
  ];
  selectedSpecie: any;
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
    } else if (this.onSearch.length > 3) {
      this.getResultFilter();
    }
    if (this.selectedSpecie === 'human' || 'alien' || 'humanoid') {
      this.getCharacterBySpecies();
    }
  }
}
