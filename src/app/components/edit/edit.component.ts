import { Component, OnInit, Output, EventEmitter , Input} from '@angular/core';
import { Todos } from 'src/app/data/todos';
import todos from 'src/app/data/mock-todos';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //editItem?: any = null;
  @Input() editItem:any=null;
  @Output() onSaveTodo=new EventEmitter();
  @Output() onCancelTodo=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  edit(item: any) {
    this.editItem = { ...item };
  }

  save() {
    // console.log(this.editItem);
    // let oldItem: any = this.todos.find((x) => x.id === this.editItem.id);
    // if (!oldItem) return;
  
    // oldItem.title = this.editItem.title;
    // oldItem.completed = this.editItem.completed;
  
    // this.editItem = null;
    this.onSaveTodo.emit(this.editItem);
  }
  
  cancel() {
    this.onCancelTodo.emit();
  }

}
