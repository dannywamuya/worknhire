import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {

  worker: Worker;

  constructor(private dataService: DataService, private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
  let id = parseInt(this.route.snapshot.paramMap.get('id'));
   
  return this.http.get<any>('https://worknhireapi.herokuapp.com/workers/' + id)
    .subscribe(data => {
        this.worker = data;
    })
  }
}
