import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  apiUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get(`${this.apiUrl}/location`);
  }
}
