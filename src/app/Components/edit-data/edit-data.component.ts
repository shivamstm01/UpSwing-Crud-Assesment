import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  EditDataForm: FormGroup;

  constructor(
    private http: ProductService, 
    private router: ActivatedRoute,
    private route: Router
  ) {
    // Initialize the form with validation
    this.EditDataForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    // Get the product ID from the route parameters
    const id = this.router.snapshot.params['id'];
    // Fetch the product data by ID and populate the form
    this.http.GetDataById(id).subscribe((result: any) => {
      console.log(result);
      this.EditDataForm.patchValue({
        name: result.name,
        price: result.price,
        category: result.category
      });
    });
  }

  // Getters for form controls to be used in the template for validation
  get name() {
    return this.EditDataForm.get('name');
  }

  get price() {
    return this.EditDataForm.get('price');
  }

  get category() {
    return this.EditDataForm.get('category');
  }

  // Method to handle form submission
  EditData(): void {
    if (this.EditDataForm.invalid) {
      this.EditDataForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
      return;
    }

    const id = this.router.snapshot.params['id'];
    this.http.UpdateData(id, this.EditDataForm.value).subscribe(
      (result) => {
        console.warn(result);
        this.route.navigate(['read-data']); // Navigate to the read-data page after successful update
      },
      (error) => {
        console.error('Error', error); // Log any errors
      }
    );
  }
}
