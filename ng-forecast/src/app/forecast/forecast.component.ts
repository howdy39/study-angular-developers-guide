import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { OpenWeatherMap } from '../shared/models/open-weather-map';
import { slideFadeIn } from '../app.animations';
import { query, stagger, transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  animations: [
    trigger('slideFade', [
      transition(':enter', [
        query('mat-list-item', [
          stagger(100, [
            useAnimation(slideFadeIn)
          ])
        ])
      ])
    ])
  ]
})
export class ForecastComponent implements OnInit {
  public currentWeatherObservable: Observable<OpenWeatherMap.Current>;
  public forecastObservable: Observable<OpenWeatherMap.Forecast>;

  constructor(
    private route: ActivatedRoute,
    private openWeatherMapService: OpenWeatherMapService
  ) { }

  ngOnInit() {
    // 現在の天気
    this.currentWeatherObservable =
      this.route.params.switchMap(param => {
        return this.openWeatherMapService.current(param['city']);
      });

    // 3時間ごとの天気
    this.forecastObservable =
      this.route.params.switchMap(param => {
        return this.openWeatherMapService.forecast(param['city']);
      });
  }

}
