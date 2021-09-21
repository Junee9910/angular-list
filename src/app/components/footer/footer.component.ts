import { Component, OnInit, Input } from '@angular/core';
import todos from 'src/app/data/mock-todos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() todos=todos;

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
