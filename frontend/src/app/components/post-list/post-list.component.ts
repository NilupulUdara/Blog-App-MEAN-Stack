import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  imports: [CommonModule,RouterModule]
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  constructor(private postService: PostService, private router: Router) {}
  ngOnInit() {
    this.postService.getPosts().subscribe((data: any) => this.posts = data);
  }
  delete(id: string) {
    this.postService.deletePost(id).subscribe(() => this.ngOnInit());
  }
}