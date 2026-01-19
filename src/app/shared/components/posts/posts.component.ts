import { Component, OnInit } from '@angular/core';
import { posts } from '../../const/posts';
import { Iposts } from '../../models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsArr : Array<Iposts> = posts

  constructor() { }

  ngOnInit(): void {
  }

}
