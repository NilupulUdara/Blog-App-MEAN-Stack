import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PostService {
  private baseUrl = 'http://localhost:3000/api/posts';
  constructor(private http: HttpClient, private auth: AuthService) {}

  private getHeaders() {
    return {
      headers: new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` })
    };
  }

  getPosts() {
    return this.http.get(this.baseUrl);
  }

  createPost(post: any) {
    return this.http.post(this.baseUrl, post, this.getHeaders());
  }

  updatePost(id: string, post: any) {
    return this.http.put(`${this.baseUrl}/${id}`, post, this.getHeaders());
  }

  deletePost(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`, this.getHeaders());
  }
}
