import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

  constructor(private http:HttpClient, private router: Router) { }

  postClient(data) {
    let url = 'https://worknhireapi.herokuapp.com/clients/new'
    this.http.post(url, data)
    .subscribe((result)=>
      console.log("result", result)
    )
    console.log(data);
    this.router.navigate(['/workers']);
  }
}
