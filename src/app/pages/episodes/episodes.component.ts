import { Component } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent {
  episodes: any = [];

  constructor(private episodesService: EpisodesService) {}

  getEpisodes() {
    this.episodesService.getEpisodes().subscribe((res) => {
      this.episodes = res;
    });
  }

  ngOnInit() {
    this.getEpisodes();
  }
}
