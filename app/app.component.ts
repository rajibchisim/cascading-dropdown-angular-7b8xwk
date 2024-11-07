import { Component, OnInit } from '@angular/core';
import { SelectService } from './select.service';
import { Country } from './country';
import { State } from './state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 5';

  selectedCountry: Country = new Country(2, 'Brazil');
  countries: Country[];
  states: State[];

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid) {
        
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }
}
