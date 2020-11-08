import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client:Client;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
  let id = parseInt(this.route.snapshot.paramMap.get('id'));
  return this.dataService.getClient(id)
    .subscribe(data => this.client = data);
  }
}
