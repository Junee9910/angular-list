import { Component, OnInit, Input } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text='';
  @Input() list:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    if (!this.text)
    {
      alert("Please write a todo");
    }
    this.list.push({id:uuidv4(),title:this.text,isCompleted:false});
    this.text=''; 
 }

}
