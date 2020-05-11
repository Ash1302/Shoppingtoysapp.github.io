import { Component, OnInit } from '@angular/core';
import { MassengerService } from 'src/app/services/messenger.service'
import { from } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [
    // { id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, productId: 2, productName: 'Test 2', qty: 5, price: 100 },
    // { id: 3, productId: 3, productName: 'Test 3', qty: 3, price: 100 },
    // { id: 4, productId: 4, productName: 'Test 4', qty: 2, price: 100 },
  ];

  cartTotal = 0;

  constructor(
    private msg: MassengerService,
    private cartService: CartService) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  // ngOnInit() {
  //   this.msg.getMsg().subscribe((product: Product) => {
  //     this.addProductToCart(product)
  //   })
  // }

  handleSubscription(){
    //in subscribe we are adding data type that is Product
    this.msg.getMsg().subscribe((product: Product) => {
      // this.cartItems.push({
      //   productid: product.id,
      //   productName:product.name,
      //   qty:1,
      //   price:product.price
      // })
      
      this.loadCartItems();
     // console.log(product);
    })
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
      //will get all items here
      this.cartItems = items; //whatever we returning assiging to items
      // console.log (items);
      this.calcCartTotal();
      //this.msg.sendMsg("");
    })
  }
  
  calcCartTotal(){
    this.cartTotal = 0
    //here we are taking each item for carttotal 
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

   removeCartItem(id: number){
     const i = this.cartItems.findIndex(e => e.id === id);
      if( i>=0 ){
      this.cartItems.splice(i, 1);
      console.log(i);
      }
  }

  
}