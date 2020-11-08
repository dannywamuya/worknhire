import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent {

  constructor(private http:HttpClient, private router:Router) { }

  postWorker(data) {
    let url = 'https://worknhireapi.herokuapp.com/workers/new'
    this.http.post(url, data)
    .subscribe((result)=>
      console.log("result", result)
    )
    console.log(data);

    this.router.navigate(['/listings']);
  }

}
