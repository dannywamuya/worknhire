import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {

  worker: Worker;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
  let id = parseInt(this.route.snapshot.paramMap.get('id'));
  return this.dataService.getWorker(id)
    // .subscribe(data => this.worker = data);
  }

}
