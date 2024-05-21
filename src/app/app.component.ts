import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
  todays: any;
  hourly: any;

  constructor(private _weatherService: WeatherService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._weatherService.getTodayWeather().subscribe((res)=>{
      console.log(res);
      this.todays = res;
      
    })

    this._weatherService.getTodayHourlyWeather().subscribe((res)=>{
      console.log(res);
      this.hourly = res;
      
    });
  }
}
