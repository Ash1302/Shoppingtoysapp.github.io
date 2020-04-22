import { Component, OnInit,Input} from '@angular/core';
import { Product} from 'src/app/models/product';
import { MassengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  
  @Input() productItem:Product

  constructor(
      private msg: MassengerService,
      private CartService: CartService
      ) { }

      ngOnInit(){}

  handleAddToCart(){
    this.CartService.addProductToCart(this.productItem).subscribe(() => {
    this.msg.sendMsg(this.productItem)
    })
  }
}

