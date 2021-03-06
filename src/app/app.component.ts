import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from './services/todo.service';
import todos from './data/mock-todos';
import { Status } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
title = 'angular-list';
//   todos=todos;
//   status: Status = 'All';
//   editItem?: any = null;


//  constructor(private todoService:TodoService){}
  
//  ngOnInit(): void {
//   this.todoService.getTodo().subscribe((data) => {
//     this.todos = data;
//     console.log(this.todos);
//   });
//   console.log(this.todos);
// }
// addTodo(text:string){
//   this.todos.push({id:uuidv4(),title:text,completed:false});
// }

// setStatus(status: any) {
//   this.status = status;
// }

// get filteredTodos() {
//   switch (this.status) {
//     case 'Active':
//       return this.todos.filter((item) => !item.completed);
//     case 'Completed':
//       return this.todos.filter((item) => item.completed);
//     default:
//       return this.todos;
//   }
// }

// toggle(item: any) {
//   item.completed = !item.completed;
// }

// edit(item: any) {
//   this.editItem = { ...item };
// }

// del(item: any) {
//   this.todos = this.todos.filter((x) => x.id !== item.id);
// }

// saveTodo(item:any) {
//   console.log(this.editItem);
//   let oldItem: any = this.todos.find((x) => x.id === this.editItem.id);
//   if (!oldItem) return;

//   oldItem.title = this.editItem.title;
//   oldItem.completed = this.editItem.completed;

//   this.editItem = null;
// }

// cancelTodo(item:any) {
//   this.editItem = null;
// }
// get count(){
//   return this.todos.length;
// }

// get activeCount(){
//   return this.todos.filter(x=>!x.completed).length;
// }
// get completedCount(){
//   return this.todos.filter(x=>x.completed).length;
// }
}
