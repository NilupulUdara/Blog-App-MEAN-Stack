import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule, RouterModule]
})
export class LoginComponent {
  user = { username: '', password: '' };
  constructor(private auth: AuthService, private router: Router) {}
  login() {
    this.auth.login(this.user).subscribe((res: any) => {
      this.auth.saveToken(res.token);
      this.router.navigate(['/post-list']);
    });
  }
}
