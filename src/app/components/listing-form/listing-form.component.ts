import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent {

  constructor(private http:HttpClient, private router:Router) { }

  postListing(data) {
    let url = 'https://worknhireapi.herokuapp.com/jobdetails/new'
    this.http.post(url, data)
    .subscribe((result)=>
      console.log("result", result)
    )
    console.log(data);
    this.router.navigate(['/listings']);
  }

}
