import { Component } from '@angular/core';
import { IproductList } from '../../models/productList';
import { productsList } from '../../const/productList';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

productArr:Array<IproductList> = productsList
 
}
