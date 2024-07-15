import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  apiUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(`${this.apiUrl}/character`);
  }

  getCharacterByFilterByName(filter: string) {
    return this.http.get(`${this.apiUrl}/character/?name=${filter}`);
  }

  getCharacterById(filterId: string) {
    return this.http.get(`${this.apiUrl}/character/${filterId}`);
  }
}
