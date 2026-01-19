import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../../models/posts';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  
})
export class PostCardComponent implements OnInit {
  @Input()  postData!:Iposts
  constructor() { }

  ngOnInit(): void {
  }

//   openTrailer(post:Iposts) {
//   window.open(post.trailerUrl, '_blank');
// }

  openTrailer(url_link:string) {
  window.open(url_link, '_blank');
}

}
