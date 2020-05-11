import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable ({
    providedIn:'root'
})

export class SearchService{
    constructor(){}

    private filtertext = new Subject<any>();
    filtertext$ = this.filtertext.asObservable();

    //subject.next() here filtertext is assiging to the next subject this method is sending msg to an observable which are then sent to all angular components that are subscribe of that observable
    sendProducts(productList:string) {
        this.filtertext.next(productList);
    }
}

