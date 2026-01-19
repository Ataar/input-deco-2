import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieDashboardComponent } from './shared/components/movie-dashboard/movie-dashboard.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { PostsComponent } from './shared/components/posts/posts.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    MovieCardComponent,
    PostCardComponent,
    PostsComponent
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
