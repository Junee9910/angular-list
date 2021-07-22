import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Status } from 'src/app/type';
import { TodoService } from 'src/app/todo.service';
import todos from '../../data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() onChangeStatus=new EventEmitter();
  status:Status='All';
  todos=todos;
  editItem?:any=null;

  constructor() { }

  ngOnInit(): void {
  }

  setStatus(status:Status){
    this.status=status;
    this.onChangeStatus.emit(status);
  }
  toggle(item:any){
    item.isCompleted=!item.isCompleted;
  }
  get filterList(){
    switch(this.status){
      case 'Active':
        return this.todos.filter(x=>!x.isCompleted);
        case 'Completed':
          return this.todos.filter(x=>x.isCompleted);
          default:
            return this.todos;
    }
  }

 edit(item:any){
this.editItem={...item};
 }
 save(){
   let oldItem:any=this.todos.find((x)=>x.id===this.editItem.id);
  
  oldItem.title=this.editItem.title;
  oldItem.isCompleted=this.editItem.isCompleted;

  this.editItem=null;
 }
 dele(item:any){
this.todos=this.todos.filter(x=>x.id!==item.id);
 }
 cancel(){
   this.editItem=null;
 }
}
