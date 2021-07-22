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

  constructor() { }

  ngOnInit(): void {
  }

  setStatus(status:Status){
    this.status=status;
    this.onChangeStatus.emit(status);
  }
}
