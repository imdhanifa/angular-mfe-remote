import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product',
  standalone: true,
  providers: [ProductsService],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product:any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    const products = this.productsService.getProducts();
    this.route.params.subscribe((param:any) => {
      this.product = products.filter(
        (product) => product.id === +param['id']
      )[0];
    });
  }

  gotoHome() {
    this.router.navigate(['/remote/products']);
  }
}
