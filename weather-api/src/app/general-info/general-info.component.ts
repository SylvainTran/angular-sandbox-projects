import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  // Queried data
  city: string = "";
  weather: string = "";
  icon: string = "";
  iconText: string = "";
  date : string = "";

  // Form Inputs
  cityInput = new FormControl('');

  // Injects the weather service for use
  constructor(private weatherService : WeatherService) {}

  ngOnInit(): void {
    this.subscribeCityInput();
  }

  subscribeCityInput() {
    this.cityInput.valueChanges.pipe(
      debounceTime(500)) 
      .subscribe(city => {
        if(city !== null) {
          this.queryCity(city);
        }
      });
      
  }

  queryCity(city: string) {
    this.weatherService.getWeather(city)
      .subscribe( res => {
        console.log(res);
        this.city = res['location'].name;
        this.weather = res['current'].temp_c + " celsius";
        this.icon = "http:" + res['current'].condition.icon;
        this.iconText = res['current'].condition.text;
        this.date = res['location'].localtime;
      });
  }

}
