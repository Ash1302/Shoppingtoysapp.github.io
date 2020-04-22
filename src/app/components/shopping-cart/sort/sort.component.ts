import { Component, OnInit, Input } from '@angular/core';
import { baseUrl } from 'src/app/config/api';
import { ProductService} from 'src/app/services/product.services';
import { Product } from 'src/app/models/product';

@Component ({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: [ './sort.component.scss']
})

export class SortComponent implements OnInit{
    price:number;

    @Input() productItem:Product

    productList: Product[] = []


    constructor() {

        // this.price = price

        // const sortByPrice = this.productList.sort((a, b) => (a.price - b.price));
        // console.log(sortByPrice + "ash");
    }


    ngOnInit(){
    }
}