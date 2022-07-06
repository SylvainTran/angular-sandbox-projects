import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'; // Used for this.http.get return value
import { catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseUrl : string = "http://api.weatherapi.com/v1";
  apiMethod : string = "/current.json";
  defaultCity : string = "Tokyo";
  key : string = "26d7a7b4df194aa0bf024309220607";

  constructor(private http: HttpClient) { }

  getWeather(city: string) : Observable<any> | Observable<never> {
    return this.http.get(this.baseUrl + this.apiMethod + "?key=" + this.key + "&q=" + city + "&aqi=no")
            .pipe(catchError( err => {
              if (err.status === 400) {
                console.log(`City ${city} not found.`);
                return EMPTY;
              }
              throw 'Error';
            }));
  }
}
