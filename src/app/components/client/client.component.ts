import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];

  constructor(private dataService:DataService) {}

  ngOnInit() {
  return this.dataService.getClients()
    .subscribe(data => this.clients = data);
  }

}
