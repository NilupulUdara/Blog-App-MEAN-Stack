import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  imports: [CommonModule, FormsModule]
})
export class PostFormComponent {
  post = { title: '', content: '', author: '' };
  constructor(private postService: PostService, private router: Router) {}
  submit() {
    this.postService.createPost(this.post).subscribe(() => this.router.navigate(['/']));
  }
}
