import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostModel } from './../PostModel';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList:PostModel[]
  isPostsLoaded = false;

  constructor(private postService:PostsService) { }

  ngOnInit() {
    this.getPostList();
  }

  getPostList(){
    this.postService.getPosts().subscribe(
      res=>{
        this.postList = res as PostModel[];
        if(this.postList.length > 0){
          this.isPostsLoaded = true;
        }
      },
      err=>{
        console.log(err);
      }
    );
  }

}
