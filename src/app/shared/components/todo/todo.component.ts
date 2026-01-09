import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../models/todo';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoData:string=`${environment.databaseURL}/Angular 1.json`;
  todoArr :Array<Itodo> = [
    
  ]
  constructor() { }

   @ViewChild('get')getdata !: ElementRef;

  ngOnInit(): void  {
  
       
  }
  

  

  addB() {
    let newObj: Itodo = {
      todoItem: this.getdata.nativeElement.value
    }
    this.todoArr.push(newObj)

    this.todoArr = Object.keys(this.todoArr).map(key => this.todoArr[parseInt(key)])
    console.log(this.todoArr)
  }
      

    }
      
      
      
      
      
   
  // addB(get : HTMLInputElement)
  // {
  //   let newObj :Itodo = {
  //     todoItem: get.value,
  //   }
  //     get.value = '';
  //     this.todoArr.push(newObj)
  //     localStorage.setItem('getObj',JSON.stringify(this.todoArr))
  //   }

