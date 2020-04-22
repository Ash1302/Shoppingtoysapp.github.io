import { Injectable } from '@angular/core';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Subject } from 'rxjs'
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class MassengerService {
    subject = new Subject()
    constructor() {

    }
    sendMsg(product) {
        //console.log(product);
        this.subject.next(product) //Triggering an event
    }

    getMsg() {
        return this.subject.asObservable()
    }

   

}