import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.services';
import { Product } from 'src/app/models/product'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductlistComponent implements OnInit {

    productList: Product[] = []
    //depdencacy injeaction
    constructor(private productServices: ProductService) {

    }
    //life cyle hook
    ngOnInit() {
    this.productServices.getProducts().subscribe((products) => {
        this.productList = products;
     })
    }
}