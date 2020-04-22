import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SortComponent} from './components/shopping-cart/sort/sort.component';
import { SearchComponent } from './components/Search/search.component';
import { CartIconComponent} from './components/cartIcon/cartIcon.component';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component'
import { ProductlistComponent} from './components/shopping-cart/product-list/product-list.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    SortComponent, 
    SearchComponent, 
    CartIconComponent,
    HomeComponent,
    ShoppingCartComponent,
    FilterComponent,
    FooterComponent,
    ProductlistComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
