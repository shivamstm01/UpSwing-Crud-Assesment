import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  constructor(private productService: ProductService) { } // Inject ProductService in constructor

  // Define the FormGroup for the form
  addDataForm = new FormGroup({
    // FormControl for Product  with required validator
    name: new FormControl('', [Validators.required]), 
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]) 
  });

  //  getters for easy access to form controls 
  get name() {
    return this.addDataForm.get('name');
  }
  get price() {
    return this.addDataForm.get('price');
  }
  get category() {
    return this.addDataForm.get('category');
  }

  ngOnInit(): void {
   
  }

  // Method to handle form submission
  AddProduct(): void {
    if (this.addDataForm.valid) { // Check if form is valid
      this.productService.saveProductData(this.addDataForm.value).subscribe(
        (result) => { // Success callback
          console.warn(result); // Log the result to console
          this.addDataForm.reset(); // Reset the form after successful submission
        },
        (error) => { // Error 
          console.error('Error', error); 
         
        }
      );
    } else {
      // If form is not valid, mark all fields as touched to display validation errors
      this.addDataForm.markAllAsTouched();
    }
  }
}
