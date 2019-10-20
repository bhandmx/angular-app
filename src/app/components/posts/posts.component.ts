import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title:'',
    body:''
  }
  isEdit: boolean = false;
  constructor(private postsService:PostsService) { }

  ngOnInit() {

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  onNewPost(post:Post){
    this.posts.unshift(post);
  }

  editPost(post:Post){
    this.currentPost= post;
    this.isEdit= true;
  }
}
