import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Listing } from 'src/app/models/listing';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lisiting-detail',
  templateUrl: './lisiting-detail.component.html',
  styleUrls: ['./lisiting-detail.component.css']
})
export class LisitingDetailComponent implements OnInit {

  listing:Listing;

  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
  let id = parseInt(this.route.snapshot.paramMap.get('id'));
    return this.dataService.getListing(id)
    .subscribe(data => this.listing = data);
  }

}
