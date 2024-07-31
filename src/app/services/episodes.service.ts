import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ApiResponse,
  IEpisodes,
  IInfo,
} from '../pages/episodes/episodes.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  apiUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

 public getEpisodes(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/episode`);
  }

  getEpisodeById(filterId: string) {
    return this.http.get(`${this.apiUrl}/episode/${filterId}`);
  }
  getEpisodeByName(filter: string) {
    return this.http.get(`${this.apiUrl}/episode/?name=${filter}`);
  }
}
