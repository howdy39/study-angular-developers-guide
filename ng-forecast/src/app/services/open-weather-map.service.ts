import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OpenWeatherMap } from '../shared/models/open-weather-map';

@Injectable()
export class OpenWeatherMapService {
  private API = '//api.openweathermap.org/data/2.5';
  private APP_ID = 'XXXXXX';

  constructor(
    public http: HttpClient
  ) {
  }

  /**
   * 現在の天気を取得
   */
  current(city: string): Observable<OpenWeatherMap.Current> {
    let params = new HttpParams();
    const data = {
      appid: this.APP_ID,
      units: 'metric',
      lang: 'JP',
      q: city
    };
    Object.keys(data).forEach(function (key) {
      params = params.set(key, data[key]);
    })
    return this.http.get<OpenWeatherMap.Current>(`${this.API}/weather`, {params});
  }

  /**
   * 1週間の天気を取得
   */
  forecast(city: string): Observable<OpenWeatherMap.Forecast> {
    let params = new HttpParams();
    const data = {
      appid: this.APP_ID,
      units: 'metric',
      lang: 'JP',
      cnt: 7,
      q: city
    };
    Object.keys(data).forEach(function (key) {
      params = params.set(key, data[key]);
    })
    return this.http.get<OpenWeatherMap.Forecast>(`${this.API}/forecast/daily`, {params});
  }
}
