import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'post-list', component: PostListComponent, canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: PostFormComponent, canActivate: [AuthGuard], },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '**', redirectTo: '' },
];