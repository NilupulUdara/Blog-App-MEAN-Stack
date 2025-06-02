import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [CommonModule, FormsModule, RouterModule]
})
export class RegisterComponent {
  user = { username: '', password: '' };
  constructor(private auth: AuthService, private router: Router) {}
  register() {
    this.auth.register(this.user).subscribe(() => this.router.navigate(['/login']));
  }
}
