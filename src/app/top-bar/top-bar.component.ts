import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  product: Product;

  results: Product[];
	 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private productService: ProductService) {
        this.product = new Product();
  }


  onSubmit(v: NgForm) {
    this.productService.findBySearch(v.value).subscribe(data => {
      this.results = data;
      console.log(data);
      //this.router.navigate(['/products']);
    });
  }

  ngOnInit(): void {
  }

}
