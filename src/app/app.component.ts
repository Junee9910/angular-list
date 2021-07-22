import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Status } from 'src/app/type';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'angular-list';
  status:Status='All';
  
  todos:any[]=[];

 constructor(private todoService:TodoService){}
  
 ngOnInit(): void {
   this.todoService.getTodo().subscribe(x=>this.todos=x);
   console.log(this.todos);
}
  addTodo(text:string){
    this.todos.push({id:uuidv4(),title:text,isCompleted:false});
  }
  setStatus(status:Status){
    this.status=status;
  }  
}
