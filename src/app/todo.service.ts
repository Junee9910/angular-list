import { Injectable } from '@angular/core';
import todos from './data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos=todos;

  constructor() { }

  getTodo(){
    return of(todos);
  }
  
}
