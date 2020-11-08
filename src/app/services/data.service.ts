import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Listing } from '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  clientsUrl = "https://worknhireapi.herokuapp.com/clients";
  workersUrl = "https://worknhireapi.herokuapp.com/workers";
  listingsUrl = "https://worknhireapi.herokuapp.com/jobdetails";

  constructor(private http: HttpClient) { }

  //CLIENT
  getClients(){
    return this.http.get<Client[]>(this.clientsUrl);
  }

  getClient(id){
    return this.http.get<Client>(this.clientsUrl + "/" + id);
  }

  //WORKER
  getWorkers(){
    return this.http.get<Worker[]>(this.workersUrl);
  }

  getWorker(id){
    return this.http.get<Worker>(this.workersUrl + "/" + id);
  }

  //LISTING
  getListings(){
    return this.http.get<Listing[]>(this.listingsUrl);
  }

  getListing(id){
    return this.http.get<Listing>(this.listingsUrl + "/" + id);
  }

}
