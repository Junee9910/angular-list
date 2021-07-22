import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import todos from '../../data';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  todos=todos;

  constructor() { }

  ngOnInit(): void {
  }
  get count(){
    return this.todos.length;
  }

  get activeCount(){
    return this.todos.filter(x=>!x.isCompleted).length;
  }
  get completedCount(){
    return this.todos.filter(x=>x.isCompleted).length;
  }
}
