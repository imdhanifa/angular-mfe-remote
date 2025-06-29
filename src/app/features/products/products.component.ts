import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'products',
  standalone: true,
  providers: [ProductsService],
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products :any= [];
  private productsService = inject(ProductsService);
  private router = inject(Router);

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  productSelected(product:any) {
    this.router.navigate(['/remote/product', product.id]);
  }
}
