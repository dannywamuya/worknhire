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

  constructor(private dataService:DataService) { }

  ngOnInit() {
    // return this.dataService.getWorkers()
    // .subscribe(data => this.workers = data);
  }

}
