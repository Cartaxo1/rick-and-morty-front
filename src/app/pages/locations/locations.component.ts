import { Component } from '@angular/core';
import { LocationsService } from '../../services/locations.service';

interface Ilocations {
  info: infoType | undefined;
  results: resultType | undefined;
}

interface infoType {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface resultType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  locations: any;
  filter = [
    { name: 'nome', value: 'name' },
    { name: 'dimensão', value: 'dimension' },
    { name: 'tipo', value: 'type' },
  ];
  selectedFilter: any;
  onSearch: string = '';

  constructor(private locationsService: LocationsService) {
    this.selectedFilter ? this.selectedFilter.value : '';
    // this.locations = []
  }
  getLocations() {
    this.locationsService.getLocations().subscribe((res) => {
      this.locations = res;
    });
  }

  ngOnInit() {
    this.getLocations();
  }

  getFilterLocation() {
    this.locationsService
      .filterLocation(
        this.selectedFilter ? this.selectedFilter.value : '',
        this.onSearch
      )
      .subscribe((res) => {
        this.locations = res;
      });
  }
}
