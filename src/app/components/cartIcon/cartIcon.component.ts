import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { Observable, from } from 'rxjs';
import { MassengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { Router} from '@angular/router';

@Component ({
    selector: 'app-cartIcon',
    templateUrl: './cartIcon.component.html',
    styleUrls: [ './cartIcon.component.scss']
})

export class CartIconComponent implements OnInit{
    cartItems: CartItem[];
    cartIconTotal = 0;

    constructor(private msg: MassengerService,
      private cartService: CartService, private router: Router){ }

    ngOnInit(){
        this.handleCartSubscription();
    }
    // loadCartItems(){
    //     this.cartservice.getCartItems().subscribe((items: CartItem[]) =>{
    //       this.cartItems = items;
    //       this.calcCartTotal();
    //     })
    //   }
    handleCartSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
        this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
          this.cartItems = items;
          let total = 0;
          this.cartItems.forEach(item => {
            total += item.qty;
          });
          this.cartIconTotal = total;
         });
    });

    this.msg.sendMsg("");
  }

  cartdetails(){
   this.router.navigate(['/cartdetails']);
  }
}





