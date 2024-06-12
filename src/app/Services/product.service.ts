import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:3000/product"
  constructor(private http:HttpClient) { }

  getAllProduct():Observable<any>{
    return this.http.get(this.url)
  }


  saveProductData(data:any):Observable<any>{
    return this.http.post(this.url,data)
  }


  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  GetDataById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }

  UpdateData(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)

  }
}
