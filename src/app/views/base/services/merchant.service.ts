
import { tap,map } from 'rxjs/operators';



import { HttpClient, HttpHeaders ,HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchant} from "../model/Merchant";
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'

  })
}
@Injectable({
  providedIn: 'root'
})
export class MerchantService {



merchant:Merchant;

baseP= "http://localhost:8080/merchant/update";
base ="http://localhost:8080/merchant/delete";
baseU='http://localhost:8080/merchant/findAll';
baseN='http://localhost:8080/merchant/findById';
  constructor(private http: HttpClient) { }


  getMerchant():Observable<any>{
    return this.http.get(this.baseU);

  }


  createMerchant(user:Object):Observable<Object>{
    return this.http.post('http://localhost:8080/merchant/register', user);
  }

  deleteMerchant(id:number):Observable<any>{
    return this.http.delete(`${this.base}/${id}`);
  }

  findById(id:number):Observable<any>{
    return this.http.get(`${this.baseN}/${id}`);
   
  }

  updateMerchant(id:number,merchant:Merchant):Observable<Object>{
    return this.http.put(`${this.baseP}/${id}`,merchant); 
  } 
}
