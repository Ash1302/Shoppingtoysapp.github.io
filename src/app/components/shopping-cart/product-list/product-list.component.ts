import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.services';
import { Product } from 'src/app/models/product'
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductlistComponent implements OnInit {
    productList: Product[] = []
    filtertext:string;
    
    //depdencacy injeaction
    constructor(private productServices: ProductService,
        private searchService: SearchService) {
        this.searchService.filtertext$.subscribe(
            productList => {
                this.filtertext = productList;
            });
        }

    //life cyle hook
    ngOnInit() {
    //this.productList = this.productServices.getProducts()
    
    //prodcutsservice in calling getprodcuts method and loading into productlist here
    this.productServices.getProducts().subscribe((products) => {
        this.productList = products;
     })
    }

    highTolow(){ 
        this.productList.sort((a, b) => (b.price - a.price));
    }

    lowTohigh(){ 
        this.productList.sort((a, b) => (a.price - b.price));
    }

    discount(){
        this.productList.sort((a, b) => (a.price - b.price));
    }
}