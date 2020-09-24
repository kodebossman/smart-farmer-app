import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchant} from "../model/Merchant";
@Injectable({
  providedIn: 'root'
})
export class MerchantService {

private url = 'http://localhost:8080/merchant/findAll';
  constructor(private http: HttpClient) { }

  getMerchant(): Observable<Merchant[]>{
    return this.http.get<Merchant[]>(this.url);
  }

}
