import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgClass,NgIf, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  menuOpen = false;
  loggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.loggedIn = this.authService.isLoggedIn();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.authService.saveToken(''); // or call a logout method in auth service to remove token
    localStorage.removeItem('token'); // clear token
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
