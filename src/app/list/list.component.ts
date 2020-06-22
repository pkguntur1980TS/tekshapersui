import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {environment} from '../global';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }

  currentWeather: any = <any>{};
  forecast: any = <any>{};

  ngOnInit(): void 
  {
    this.searchWeather(environment.city);
  }

  searchWeather(loc: string) {
    
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
      }, err => {
}, () => {
        this.searchForecast(loc);
      })
  }
  searchForecast(loc: string) {
    this.weatherService.getForecast(loc)
      .subscribe(res => {
        this.forecast = res;
      }, err => {
})
  }
}
