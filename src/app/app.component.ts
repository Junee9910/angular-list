import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Status } from 'src/app/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'angular-list';
  status:Status='All';
  editItem?:any=null;

  todos=[
    {id:uuidv4(),title:"One",isCompleted:true},
    {id:uuidv4(),title:"Two",isCompleted:true},
    {id:uuidv4(),title:"Three",isCompleted:false}
  ];

  addTodo(text:string){
    this.todos.push({id:uuidv4(),title:text,isCompleted:false});
  }
  setStatus(status:Status){
    this.status=status;
  }
  toggle(item:any){
    item.isCompleted=!item.isCompleted;
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
