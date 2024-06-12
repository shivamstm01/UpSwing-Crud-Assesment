import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})
export class ReadDataComponent implements OnInit {
  ProductData: any[] = []; // Array to hold the product data
  searchTerm: string = ''; // Property to bind to the search input field

  constructor(private http: ProductService) { }

  ngOnInit(): void {
    this.loadData(); // Load product data when the component initializes
  }

  loadData(): void {
    this.http.getAllProduct().subscribe((allData: any[]) => {
      this.ProductData = allData; // Assign the received data to the ProductData array
    });
  }

  DeleteProduct(product_id: any): void {
    this.http.deleteProduct(product_id).subscribe((result) => {
      this.loadData(); // Reload the product data after deletion
    });
    alert('Deleted'); 
  }
}
