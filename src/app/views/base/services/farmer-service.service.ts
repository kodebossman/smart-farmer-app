import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Todo} from '../model/Todo';
const httpOptions = {
headers :new HttpHeaders({
  'Content-Type': 'application/json'
})
}

@Injectable({
  providedIn: 'root'
})
export class FarmerServiceService {


todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
todosLimit = '?_limit=10';

  constructor(private http:HttpClient) {
  }
//get Todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

}
