import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getTodayWeather(): Observable<any> {
    return this._http.get(`${baseUrl}/today`);
  }

  getTodayHourlyWeather(): Observable<any> {
    return this._http.get(`${baseUrl}/hourly`);
  }
}
