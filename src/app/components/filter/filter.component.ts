import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Status } from 'src/app/type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() onChangeStatus=new EventEmitter();
  status:Status='All';

  constructor() { }

  ngOnInit(): void {
  }

  setStatus(status:Status){
    this.status=status;
    this.onChangeStatus.emit(status);
  }

}
