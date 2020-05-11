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
 
//this prodcutItem is property which is coming from Pranet That is prodcutList copmonent,
//and product is datatype that we delacare as obecj in productList parent copmponent, 
//taking product from parent and setting properties in html of productItem Product is class which we mentiond ed on model in property
//this prodcutitem  is coming from prantcompoent as input and we are stroing in Prodcut Item property which can be aceess into prdocut item component
//prcodutiem is the propert now

  @Input() productItem:Product

  constructor(
      private msg: MassengerService, private CartService: CartService
      ) { }

      ngOnInit(){}

    handleAddToCart(){
      //adding service here with fucntion the addProductcart once the prodcut add to the 
      //severside we are imforming to the cartItem component through the subscriibe this send msg
      this.CartService.addProductToCart(this.productItem).subscribe(() => {
      //first step
      this.msg.sendMsg(this.productItem)
      })
    }

  }



