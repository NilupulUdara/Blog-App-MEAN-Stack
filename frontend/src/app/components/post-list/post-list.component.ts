import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  imports: [CommonModule, RouterModule]
})
export class PostListComponent implements OnInit {

  posts: any[] = [];
  currentUserId: string = '';

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.currentUserId = payload.id;
      } catch (error) {
        console.error('Invalid token format', error);
      }
    }

    this.postService.getPosts().subscribe((data: any) => this.posts = data);
  }

  delete(id: string) {
    this.postService.deletePost(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
