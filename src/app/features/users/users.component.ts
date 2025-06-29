import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [CommonModule],
})
export class UsersComponent {
  users = [
    { name: 'satish', id: 10 },
    { name: 'sudheer', id: 20 },
    { name: 'mohan', id: 30 },
  ];
  private router = inject(Router);

  onUserClick(user: any) {
    this.router.navigate(['/remote/user'], {
      queryParams: { id: user.id, name: user.name }
    });
  }
}
