import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  buttonCharacters = 'Characters';
  buttonLocations = 'Locations';
  buttonEpisodes = 'Episodes';

  constructor(private homeService: HomeService) {}


}
