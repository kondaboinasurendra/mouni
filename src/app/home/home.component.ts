import { Component,OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment} from'src/environments/environment';
import{SharedService} from'src/app/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  productsUpi:any=environment.apiUrl+"products"
  products:any=[]
  constructor(private http:HttpClient, private share:SharedService){}

  ngOnInit():void{
    this.http.get(this.productsUpi).subscribe(Response=>{
      this.products=Response;
    })

  }
  add(data:any){
    this.share.share(data);

  }
  suri:any=[]
  viewdetalies(data:any){
    alert(data.id)
    this.suri=data;
    
  }
}
