import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  workers: Worker[];

  constructor(private dataService:DataService,private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<any>('https://worknhireapi.herokuapp.com/workers')
    .subscribe(data => {
        this.workers = data;
    })
  }

}
