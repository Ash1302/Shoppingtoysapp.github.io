import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class MassengerService {
    //subject is for listing and triggering
    subject = new Subject()
    constructor() {
    }

    //we are passing parameter here name can be anything in(product) wan to send one product
    sendMsg(product) {
       // console.log(product); you will product here which ever we are addtocart
       //this is triggering for subscribtion
        this.subject.next(product) //Triggering an event 
    }
    //in getMsg() can call anyone who what to subsirbe the 
    //this getMsg has to subscribe by the cartComonent  this will return as obsrvable so that anyone subscribe  to 

    //it will retrun as an observale so anyone can call getMsg() to subscibe which is trigger over here
    getMsg() {
        return this.subject.asObservable()
    }

}