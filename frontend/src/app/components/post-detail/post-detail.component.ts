import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {
  post: any;
  newComment = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/api/posts/${postId}`).subscribe(post => {
      this.post = post;
    });
  }

  addComment() {
    if (!this.newComment.trim()) return;

    const postId = this.post._id;
    this.http.post(`http://localhost:3000/api/posts/${postId}/comments`, {
      text: this.newComment
    }, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    }).subscribe((res: any) => {
      this.post.comments.push(res.comment);
      this.newComment = '';
    });
  }
  
}