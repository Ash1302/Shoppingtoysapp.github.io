import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api'

import { Product } from '../models/product';

//const apiUrl = "http://localhost:3000/products";

@Injectable({
    providedIn:'root'
})

export class ProductService{
    // productList: Product[] = [
    //  new Product(1,'Product 1', 'This is the product 1 description. The product is really cool!', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'),
    //  new Product(2,'Product 2', 'This is the product 2 description. The product is really cool!', 200, 'https://cdn.dalvey.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/a/laptop_mouse--00795.jpg'),
    //  new Product(3,'Product 3', 'This is the product 3 description. The product is really cool!', 300, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'),
    //  new Product(4,'Product 4', 'This is the product 4 description. The product is really cool!', 400, 'https://cdn.dalvey.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/a/laptop_mouse--00795.jpg'),
    //  new Product(5,'Product 5', 'This is the product 5 description. The product is really cool!', 500, 'https://cdn.dalvey.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/a/laptop_mouse--00795.jpg'),
    //  new Product(6,'Product 6', 'This is the product 6 description. The product is really cool!', 600, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'),
    //  new Product(7,'Product 7', 'This is the product 7 description. The product is really cool!', 700, 'https://cdn.dalvey.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/a/laptop_mouse--00795.jpg'),
    //  new Product(8,'Product 8', 'This is the product 7 description. The product is really cool!', 800, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG')
    // ]

    constructor (private http: HttpClient) {
    }

    // we created get method overhere this is nesscacrt for prduct list
    
    //we have to specify data type
    getProducts(): Observable<Product[]> {
        //TODO: Populate prducts from an API and reurn an Observable
        //return this.productList
          return this.http.get<Product[]>(productsUrl);
    }
}