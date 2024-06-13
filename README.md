

# UpSwing CRUD Assessment Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

This project is a simple CRUD (Create, Read, Update, Delete) application built with Angular. It allows users to add, view, edit, and delete products stored in a local JSON database.


# Project Description
The UpSwing CRUD Assessment project is designed to demonstrate a functional web application using Angular. The application includes the following features:

Add Product: Users can add new products with details like name, price, and category.
Read Product: Users can view a list of all products.
Update Product: Users can edit the details of an existing product.
Delete Product: Users can delete a product from the list.

# Usage

* Adding a Product
Click on the "Add Data" link in the navigation bar.
Fill out the form with the product details.
Click the "Submit" button to add the product.

* Viewing Products
Click on the "Read Data" link in the navigation bar.
View the list of all products.
Use the search bar to filter products by name, price, or category.

* Editing a Product
Click the "Edit" link next to a product in the product list.
Update the product details in the form.
Click the "Submit" button to save the changes.

* Deleting a Product
Click the "Delete" link next to a product in the product list.
Confirm the deletion.

# Project Structure
* src/app/Components/add-data: Component for adding new products.
* src/app/Components/read-data: Component for viewing and searching products.
* src/app/Components/edit-data: Component for editing product details.
* src/app/Services/product.service.ts: Service for handling HTTP requests related to products.
* src/database/db.json: JSON file acting as the mock database for product data.

# Dependencies

Angular: Front-end framework for building web applications.
Angular Material: UI component library for Angular.
json-server: Mock backend server for simulating REST APIs.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
