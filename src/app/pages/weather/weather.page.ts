/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core'
import { BrowserStorageService } from '../../services/browser-storage.service'
import { CityService } from '../../services/city.service'
import { AppStateService } from '../../services/app-state.service'

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.page.html',
  styleUrls: ['weather.page.scss']
})
export class WeatherPage implements OnInit {

  weatherIconIndex: object = {
    '01d': {
      description: 'clear sky (day)'
    },
    '01n': {
      description: 'clear sky (night)'
    },
    '02d': {
      description: 'few clouds (day)'
    },
    '02n': {
      description: 'few clouds (night)'
    },
    '03d': {
      description: 'scatter clouds (day)'
    },
    '04d': {
      description: 'broken clouds'
    },
    '09d': {
      description: 'shower rain'
    },
    '10d': {
      description: 'rain (day time)'
    },
    '10n': {
      description: 'rain (night time)'
    },
    '11d': {
      description: 'thunderstorm'
    },
    '13d': {
      description: 'snow'
    },
    '50d': {
      description: 'mist (day)'
    },
    '50n': {
      description: 'mist (night)'
    }
  }

  sub: any

  selectedCity: string
  selectedState: string
  selectedCountry: string
  selectedCityData: any = {
    city: null,
    state: null,
    location: {
      coordinates: []
    },
    current: {
      pollution: {
        ts: null, // timestamp
        aqius: null, //
        mainus: null, // main pollutant for US AQI
        aqicn: null,
        maincn: null, // main pollutant for Chinese AQI
      },
      weather: {
        ts: null, // timestamp
        tp: null, // temperature in Celsius
        pr: null, // atmospheric pressure in hPa
        hu: null, // humidity
        ws: null, // wind speed
        wd: null, // wind direction, as an angle of 360° (N=0, E=90, S=180, W=270)
        ic: null, // weather icon code
      }
    },
  }

  altIcon = {
    description: null
  }

  constructor(
    private browserStorageService: BrowserStorageService,
    private cityService: CityService,
    private appStateService: AppStateService
  ) {
    this.selectedCountry = browserStorageService.getLocal('selectedCountry') || ''
    this.selectedState = browserStorageService.getLocal('selectedState') || ''
    this.selectedCity = browserStorageService.getLocal('selectedCity') || ''

    this.appStateService.event.subscribe((data) => {
      this.loadCityData({
        city: data.selectedCity ? data.selectedCity : this.selectedCity,
        state: data.selectedState ? data.selectedState : this.selectedState,
        country: data.selectedCountry ? data.selectedCountry : this.selectedCountry
      })
    })
  }

  ngOnInit() {

    if (this.selectedCountry && this.selectedState && this.selectedCity) {
      this.loadCityData({
        city: this.selectedCity,
        state: this.selectedState,
        country: this.selectedCountry
      })
    }
  }

  loadCityData({ city, state, country }) {
    this.sub = this.cityService.getData({ city, state, country })
      .subscribe(cityRef => {
        this.selectedCityData = cityRef && cityRef.data ? cityRef.data : {}

        this.altIcon = this.weatherIconIndex[this.selectedCityData.current.weather.ic] || this.altIcon
      }, e => {
        console.log({ error: e })
      })
  }

}

/// EOF
