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

}
