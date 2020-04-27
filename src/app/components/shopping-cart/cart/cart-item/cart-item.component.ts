import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any
  // cartItems = [];
  // productItem: any;
  
  constructor() { }

  ngOnInit() {
  }

//   removeCartItem(obj: any){
//     this.productItem = this.productItem.filter(item => item !== obj);
//     console.log("ash");
//  }

  // removeCartItem(cartItem: any){
  // const index: number = this.cartItems.indexOf(cartItem);
  // this.cartItems.splice(index, 1);
  // console.log("ash");
  //  }


 
}
