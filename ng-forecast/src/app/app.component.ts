import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from './services/loading.service';
import { Area } from './shared/models/area';
import { AreaService } from './services/area.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ng2-forecast';
  public loadingObservable: Observable<boolean>;
  public areasObservable: Observable<Area[]>;

  constructor(
    private loadingService: LoadingService,
    private areaService: AreaService,
  ) {}

  ngOnInit() {
    this.loadingObservable = this.loadingService.loading;
    this.areasObservable = this.areaService.getList();
  }
}
