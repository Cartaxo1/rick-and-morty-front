import { Component } from '@angular/core';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  locations: any = [];

  constructor(private locationsService: LocationsService) {}
  getLocations() {
    this.locationsService.getLocations().subscribe((res) => {
      this.locations = res;
    });
  }

  ngOnInit() {
    this.getLocations();
  }
}
