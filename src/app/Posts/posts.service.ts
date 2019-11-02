import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PostsService {

  constructor(private http:HttpClient) { }

  private URL = 'https://my-json-server.typicode.com/typicode/demo/posts';

  getPosts(){
    return this.http.get(this.URL);
  }


}
