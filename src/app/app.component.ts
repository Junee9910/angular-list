import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'angular-list';
  status:'All'|'Active'|'Completed'='All';
  editItem?:any=null;

  list=[
    {id:uuidv4(),title:"One",isCompleted:true},
    {id:uuidv4(),title:"Two",isCompleted:true},
    {id:uuidv4(),title:"Three",isCompleted:false}
  ];

  toggle(item:any){
    item.isCompleted=!item.isCompleted;
  }
  get count(){
    return this.list.length;
  }

  get activeCount(){
    return this.list.filter(x=>!x.isCompleted).length;
  }
  get completedCount(){
    return this.list.filter(x=>x.isCompleted).length;
  }
  setStatus(status:'All'|'Active'|'Completed'){
    this.status=status;
  }
  get filterList(){
    switch(this.status){
      case 'Active':
        return this.list.filter(x=>!x.isCompleted);
        case 'Completed':
          return this.list.filter(x=>x.isCompleted);
          default:
            return this.list;
    }
  }

 edit(item:any){
this.editItem={...item};
 }
 save(){
   let oldItem:any=this.list.find((x)=>x.id===this.editItem.id);
  
  oldItem.title=this.editItem.title;
  oldItem.isCompleted=this.editItem.isCompleted;

  this.editItem=null;
 }
 dele(item:any){
this.list=this.list.filter(x=>x.id!==item.id);
 }
 cancel(){
   this.editItem=null;
 }
}
