import { Component } from "@angular/core";


//  we can create a component by using single file


@Component({

    selector : "app-btn",
    template :  `<button class="d-block m-auto">Click Me</button>`,
    styles : [

         `
         button
         {
            padding : 10px 20px;
            background-color:pink;
            color:white;
            font-weight:bold;
            border-radius:5px;
            border:2px solid pink;
         }
         
         
         `
       
    ]
    

})


export class BtnComponent
{

}