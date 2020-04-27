import {Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Product } from 'src/app/models/product';

@Pipe({
    name: 'searchFilter'
})

export class Searchfilter implements PipeTransform{
    transform(productList: Product[],filtertext:string): Product[]{
       if(!productList || !filtertext){
            return productList;
       }
            return productList.filter(product => 
             product.name.toLowerCase().indexOf(filtertext.toLowerCase()) !== -1);
       }
    }


