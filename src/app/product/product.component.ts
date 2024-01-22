import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productStatus : boolean = true;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.productStatus =false
    }, 3000);
  }

  productName : string = 'Vivo A14';
  productId : number = 101;

  prodData = `<h4>Samsung Mobile Info</h4>`;
  prodStatus : string = 'Products are added in the cart'
  cl = console.log;
  productCount : number = 0;
  eventInfo!:string

  updateCartStatus(eve:any){
    // this.cl('Clicked')
    this.productCount++;
    this.prodStatus = `${this.productCount} products are added in the cart`;
  }

  removeProduct(){
    if(this.productCount>0){
      this.productCount--;
      this.prodStatus = `${this.productCount} products are removed from the cart`;
    }
  }

  //input
  keyup(event:Event){
    let val = (event.target as HTMLInputElement).value;
    this.eventInfo=val;
  }
}
