import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  characters: any = [];
  onSearch: string = '';
  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.getCharacters();
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

  validaSeNumeroOuString() {
    if (this.onSearch.length <= 3) {
      this.getCharacterById();
    } else if (this.onSearch.length > 3) {
      this.getResultFilter();
    }
  }
}
