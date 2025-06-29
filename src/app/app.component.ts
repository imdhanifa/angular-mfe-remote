import { Component } from '@angular/core';
import { ProductsService } from './features/products/services/products.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [ProductsService],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}