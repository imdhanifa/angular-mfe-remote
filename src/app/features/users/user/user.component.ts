import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  imports: [CommonModule],
})
export class UserComponent {
  selectedUser = { id: '', name: '' };
  private route = inject(ActivatedRoute);
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.selectedUser.id = params.get('id') ?? '';
      this.selectedUser.name = params.get('name') ?? '';
    });
  }
}
