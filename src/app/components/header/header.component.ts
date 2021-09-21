import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text='';
  @Output() onAddTodo=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    if (!this.text)
    {
      alert("Please write a todo");
    }
    this.onAddTodo.emit(this.text);
    this.text=''; 
 }

}
