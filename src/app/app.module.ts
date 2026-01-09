import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { TodoComponent } from './shared/components/todo/todo.component';
import { StudentComponent } from './shared/components/student/student.component';
import { TmdbComponent } from './shared/components/tmdb/tmdb.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './shared/components/test/test.component'; // Import this
import { BtnComponent } from './shared/components/test/btn/btn';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TodoComponent,
    StudentComponent,
    TmdbComponent,
    TestComponent,
    BtnComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
