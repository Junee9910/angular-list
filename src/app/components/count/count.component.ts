import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import todos from '../../mock-todos';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  todos=todos;
  // @Input()

  constructor() { }

  ngOnInit(): void {
  }
  get count(){
    return this.todos.length;
  }

  get activeCount(){
    return this.todos.filter(x=>!x.completed).length;
  }
  get completedCount(){
    return this.todos.filter(x=>x.completed).length;
  }
}
