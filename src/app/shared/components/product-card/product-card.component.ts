import { Component, Input } from '@angular/core';
import { IproductList } from '../../models/productList';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent  {
  
 @Input() product!: IproductList;

getRatingStyle() {
  const r = this.product.rating;

  if (r === 4.4) {
    return { backgroundColor: 'tomato', color: '#000' };
  }
  else if (r >= 4.5 && r < 5.2) {
    return { backgroundColor: 'yellow', color: '#000' };
  }
  else if (r >= 5.3 && r <= 6) {
    return { backgroundColor: '#51f099', color: '#000' };
  }
  else if (r >= 6.2 && r <=6.5) {
    return { backgroundColor: '#2b3b03', color: '#fff' }; // 👈 TEXT COLOR CHANGE
  }
    else if (r >= 7.1 && r <=7.5) {
    return { backgroundColor: '#8d5409' , color:'#fff'};
  }

 else{

   return { backgroundColor: 'transparent', color: '#000' };
 }
}

// getRatingBg(): string {
//   const r = this.product.rating
//   if (r === 4.4) {
//     return 'tomato';
//   } 
  
//   else if (r >=4.5 && r<5.2) {
//     return 'yellow';
//   }

//   else if(r >= 5.3 && r<=6)
//   {
//     return '#51f099';
//   }
//   else if(r >= 6.2 && r<6.5)
//   {
//     return '#2b3b03';
//   }


//   else
//   return 'transparent';
// }



}
