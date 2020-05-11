import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { CartItem } from 'src/app/models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CartService{
    constructor( private http: HttpClient){ }

    //this is the function that returns the cartItem array getcattItem calls API so it returns the observable which will cartItem so we have to import observable
    //this will get cartItem from url
    getCartItems():Observable<CartItem[]>{
        //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
        return this.http.get<CartItem[]>(cartUrl).pipe(
          //this will retrun cartItem array of cart Url 
          map((result: any[]) => {
              //console.log(result);
               let cartItems: CartItem[] = [];

               for(let item of result){
                 let productExists = false

                 //item.product.i - item has id with prodcut property 
                 //i idicates the index
                 for (let i in cartItems) {
                   //item.product.id- item has iD and product property
                    if (cartItems[i].productId === item.product.id) {
                      cartItems[i].qty++
                      productExists = true
                      break;
                    }
                  }
              
                  if (!productExists) {
                    cartItems.push(new CartItem(item.id, item.product));
                   // console.log(cartItems);
                      //this.cartItems.push({
                      // productId: product.id,
                      // productName: product.name,
                      // qty: 1,
                      // price: product.price
                  }

               }
               
               return cartItems;
              
            })
        );
    }

  //   removeCartItem(id: number){
  //     for (let i in this.cartItems) {
  //       //item.product.id- item has iD and product property
  //        if (this.cartItems[i].productId === item.product.id) {
  //          this.cartItems[i].qty++
  //          break;
  //        }
  //      }
  //  }

    //retrun observable with current cart item 
    addProductToCart(product:Product): Observable<any>{
      //console.log(product);
      return this.http.post(cartUrl, { product });
        //this will return like this
   //{id:1, prodcut{} the object}
    }
     
    
}