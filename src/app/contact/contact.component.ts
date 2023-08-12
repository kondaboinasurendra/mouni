import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  products:any=[]
productsurl:any=environment.apiUrl+"products"
  constructor(private http:HttpClient){}
ngOnInit(): void {
  this.http.get(this.productsurl).subscribe(Response=>{

    this.products=Response
    console.log(this.products);
  })
  
}
}
