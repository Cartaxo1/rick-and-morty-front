import { Component } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';

export interface ApiResponse {
  info?: IInfo;
  results?: IEpisodes[];
}

export interface IEpisodes {
  id: number;
  name: string;
  air_date: Date;
  episode: string;
  characters: string;
  url: string;
  created: Date;
}

export interface IInfo {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent {
  episodes: ApiResponse | undefined;
  episodesById: IEpisodes | undefined;
  onSearch: string = '';
  filter = [
    { name: 'nome', value: 'name' },
    { name: 'número', value: 'episode' },
  ];
  selectedFilter: any;

  constructor(private episodesService: EpisodesService) {
    this.episodes = undefined;
    this.episodesById = undefined;
  }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.episodesService.getEpisodes().subscribe((res: ApiResponse) => {
      this.episodes = res;
      console.log(this.episodes);
    });
  }

  getEpisodeById() {
    this.episodesService.getEpisodeById(this.onSearch).subscribe((res: any) => {
      this.episodesById = res;
      console.log(this.episodes);
    });
  }

  getEpisodeByName() {
    this.episodesService
      .getEpisodeByName(this.onSearch)
      .subscribe((res: ApiResponse) => {
        this.episodes = res;
        console.log(this.episodes);
      });
  }

  searchFilter() {
    if (this.onSearch.length <= 3) {
      this.getEpisodeById();
    } else if (this.onSearch.length > 3) {
      this.getEpisodeByName();
    }
  }
}
