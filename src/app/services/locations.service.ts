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

  getLocationsByName(filter: string) {
    return this.http.get(`${this.apiUrl}/location/?${filter}=`);
  }

  filterLocation(filter: string, filterValue: string) {
    return this.http.get(`${this.apiUrl}/location/?${filter}=${filterValue}`);
  }
}
