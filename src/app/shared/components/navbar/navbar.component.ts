import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen : boolean = false;
  isOpen2 : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
   onToggle()
   {
    this.isOpen = !this.isOpen
   }

   on()
   {
     this.isOpen2 = !this.isOpen2
   }
}
