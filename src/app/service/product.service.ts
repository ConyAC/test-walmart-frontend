import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
	private productsUrl: string;
	 
	constructor(private http: HttpClient) {
	  this.productsUrl = 'http://localhost:8990/products/search';
	}
	
	public findBySearch(value: string) {
		let httpParams = new HttpParams().append("value", value);
		return this.http.post<Product[]>(this.productsUrl+ '?value='+value, {params:httpParams});
	}
}
