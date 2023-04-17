import { Injectable } from '@angular/core'; //creo que esto hace que ya no tengamos que usar el inject
import { HttpClient } from '@angular/common/http';
import { Category, Product, ProductDetails } from '../components/product-card/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor( private http:HttpClient ){ 
  }

  baseUrlApi :string = "https://api.escuelajs.co/api/v1/products/"

  getPaginatedProducts(offset:number=0,limit:number=10){
    return this.http.get<Product[]>(`${this.baseUrlApi}?offset=${offset}&limit=${limit}`);
  }

  getAllproducts(){
    return this.http.get<Product[]>(`${this.baseUrlApi}`);
  }

  getProducDetail(id:string){
    return this.http.get<ProductDetails>(`${this.baseUrlApi}${id}`)
  }

  getProductsByCategory(categoryId:number){
    //https://api.escuelajs.co/api/v1/products/?categoryId=1
    return this.http.get<Product[]>(`${this.baseUrlApi}?categoryId=${categoryId}`);
  }

  getCategories(){
    return this.http.get<Category[]>(`https://api.escuelajs.co/api/v1/categories`);
  }

}
