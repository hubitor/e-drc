import { Component, OnDestroy, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { DataService } from '../data.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-angular-way',
  templateUrl: 'angular-way.component.html'
})
export class AngularWayComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  users: Array<any>;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http: Http, private _dataService: DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this._dataService.getUsers()
    .subscribe(res => {
      this.users = res;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}
