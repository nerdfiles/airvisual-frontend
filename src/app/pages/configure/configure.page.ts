import { Component } from '@angular/core'
import { CountriesReferenceService } from '../../services/countries-reference.service'
import { StatesReferenceService } from '../../services/states-reference.service'
import { CitiesReferenceService } from '../../services/cities-reference.service'
import { BrowserStorageService } from '../../services/browser-storage.service'
import { AppStateService } from '../../services/app-state.service'

@Component({
  selector: 'app-configure',
  templateUrl: 'configure.page.html',
  styleUrls: ['configure.page.scss']
})
export class ConfigurePage {

  cities: any[] = []
  states: any[] = []
  countries: any[] = []
  selectedCountry: any
  selectedState: any
  selectedCity: any

  constructor(
    private browserStorageService: BrowserStorageService,
    private countriesReferenceService: CountriesReferenceService,
    private statesReferenceService: StatesReferenceService,
    private citiesReferenceService: CitiesReferenceService,
    private appStateService: AppStateService
  ) {
    this.loadCountries().then(() => {
      this.selectedCountry = browserStorageService.getLocal('selectedCountry') || ''
      if (this.selectedCountry) {
        this._loadStates(this.selectedCountry).then(res => {
          if (this.selectedState) {
            this._loadCities(this.selectedState)
          }
        })
      }
    })
  }

  /**
   * selectedCityHandler
   */
  selectedCityHandler(city) {
    this.selectedCity = city
    this.browserStorageService.setLocal('selectedCity', this.selectedCity)
    this.appStateService.publish({
      selectedCity: city,
      selectedState: this.selectedState,
      selectedCountry: this.selectedCountry
    })
  }

  _loadCities(selectedState) {
    this.citiesReferenceService.getCities({
      state: selectedState,
      country: this.selectedCountry
    })
      .subscribe((citiesRef) => {
        this.cities = citiesRef._embedded
        this.selectedCity = this.browserStorageService.getLocal('selectedCity') || ''
      }, (e) => {
        console.log({ error: e })
      })
  }

  /**
   * selectedStateHandler
   */
  selectedStateHandler(selectedState) {
    this.selectedState = selectedState
    this.browserStorageService.setLocal('selectedState', this.selectedState)

    this._loadCities(selectedState)
  }

  _loadStates(selectedCountry) {
    return new Promise((res, rej) => {
      this.statesReferenceService.getStates({ country: selectedCountry })
        .subscribe((statesRef) => {
          this.states = statesRef._embedded
          this.selectedState = this.browserStorageService.getLocal('selectedState') || ''
          res(statesRef)
        }, (e) => {
          console.log({ error: e })
          rej({ error: e })
        })
    })
  }

  /**
   * selectedCountryHandler
   */
  selectedCountryHandler(selectedCountry) {
    this.selectedCountry = selectedCountry
    this.browserStorageService.setLocal('selectedCountry', this.selectedCountry)
    this._loadStates(selectedCountry).then(res => {
      console.log(res)
    })
  }

  /**
   * loadCountries
   */
  loadCountries() {
    return new Promise((res, rej) => {
      this.countriesReferenceService.getCountries()
        .subscribe((countriesRef) => {
          this.countries = countriesRef._embedded
          res(countriesRef)
        }, (e) => {
          console.log({ error: e })
          rej({ error: e })
        })
    })
  }

}
