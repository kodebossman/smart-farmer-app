import { Post } from './../model/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchant} from "../model/Merchant";
@Injectable({
  providedIn: 'root'
})
export class MerchantService {

base ="https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getMerchant():Observable<Post[]>{
    return this.http.get<Post[]>(this.base);
  }
  createMerchant(user){
    return this.http.post('http://localhost:8080/merchant/register', user);
  }
  deleteMerchant(id){
    return this.http.delete(`${this.base}/${id}`);
  }
}
