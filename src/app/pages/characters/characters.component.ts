import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  characters: any = [];
  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe((res) => {
      this.characters = res;
      console.log(this.characters, 'characters');
    });
  }
}
