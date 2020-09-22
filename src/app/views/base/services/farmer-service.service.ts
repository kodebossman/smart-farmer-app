import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Farmer} from '../model/Farmer';
import { map, tap } from 'rxjs/operators'
const httpOptions = {
headers :new HttpHeaders({
  'Content-Type': 'application/json'
})
}

@Injectable({
  providedIn: 'root'
})
export class FarmerServiceService {

farmer:Farmer;
farmers:Farmer[]
farmerUrl:string = 'http://localhost:8091/farmer/all';
//farmerLimit = '?_limit=10';

  constructor(private http:HttpClient) {
  }
//get Todos
  getTodos():Observable<Farmer[]>{
    return this.http.get<Farmer[]>(this.farmerUrl)
    .pipe(map(response=>response),tap(
      farmers=>console.log("Farmers",this.farmers)))
}



}