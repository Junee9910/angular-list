import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Todos } from '../data/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl='http://localhost:5000/todos'

  constructor( private http:HttpClient) { }

  getTodo():Observable<Todos[]>{
    return this.http.get<Todos[]>(this.apiUrl);
  }
  
}
