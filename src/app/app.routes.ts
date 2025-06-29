import { Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { ProductComponent } from './features/products/product/product.component';
import { ProductsComponent } from './features/products/products.component';
import { UserComponent } from './features/users/user/user.component';
import { UsersComponent } from './features/users/users.component';

export const routes: Routes = [ { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UserComponent }];
