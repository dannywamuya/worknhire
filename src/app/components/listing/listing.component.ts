import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/listing';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listings: Listing[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getListings()
    .subscribe(data => this.listings = data);
  }
}
