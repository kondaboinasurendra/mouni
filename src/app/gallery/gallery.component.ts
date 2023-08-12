import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  products:any=[]
  prodUpl:any=environment.apiUrl+'products'
  constructor(private http:HttpClient, private share:SharedService){}
  ngOnInit(): void {
    this.http.get(this.prodUpl).subscribe(response=>{
      this.products=response;
      console.log(this.products)

    })
  }
  add(data:any){
    this.share.share(data);

  }
suri:any=[]
  detailes(data:any){
    alert(data.id)
    this.suri=data;
    console.log(this.products);
  }


}
