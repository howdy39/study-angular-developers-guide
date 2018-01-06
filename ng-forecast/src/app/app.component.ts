import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ng2-forecast';
  public loadingObservable: Observable<boolean>;

  constructor(
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadingObservable = this.loadingService.loading;
  }

}
