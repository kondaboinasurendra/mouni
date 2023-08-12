import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  totalAmount:any=0;
  cartCount:any=0;
  products:any=[]
  constructor(private share:SharedService){
    this.share.getData.subscribe(data=>{
      if(data!=null)
      {
        this.products.push(data);
        console.log(this.products)
        this.cartCount=this.products.length;
        this.totalAmount=this.products.accumulator

      }
    })
  }

  delete(data:any){
    this.products.splice(data,1)
  }

}