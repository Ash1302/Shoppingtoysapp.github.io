import { Component} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component ({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss']
})

export class SearchComponent{
    filtertext:string;
    constructor( private searchService:SearchService){
    }

    searchItem(){
        this.searchService.sendProducts(this.filtertext);
    }
}