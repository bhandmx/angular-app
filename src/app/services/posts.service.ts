import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/Post";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  postsUrl: string = 'http://jsonplaceholder.typicode.com/posts';
  limit: string = '?_limit=5';

  constructor(private http: HttpClient) { 

  }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);

  }

  getPost(id: number) : Observable<Post> {
    const url = `${this.postsUrl}/${id}`;

    return this.http.get<Post>(url);
  }
  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl,post,httpOptions);

  }
}
