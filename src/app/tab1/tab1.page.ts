import { Component } from '@angular/core';
import { CountriesReferenceService } from '../countries-reference.service';
import { StatesReferenceService } from '../states-reference.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  countries: any[] = [];
  selectedCountry: any;

  constructor (
    private countriesReferenceService: CountriesReferenceService,
    private statesReferenceService: StatesReferenceService
  ) {
    this.loadCountries()
  }

  selectedCountryHandler (selectedCountry) {
    this.statesReferenceService.getStates({ country: selectedCountry })
      .subscribe((statesRef) => {
        console.log(statesRef)
      }, (e) => {
        console.log({ error: e });
      });
  }

  loadCountries () {
    this.countriesReferenceService.getCountries()
      .subscribe((countriesRef) => {
        this.countries = countriesRef._embedded;
      });
  }

}
