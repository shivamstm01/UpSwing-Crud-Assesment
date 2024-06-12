import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {


  transform(products: any[], searchTerm: string): any[] {
    if (!products || !searchTerm) {
      return products; // If no products or search term, return the original products array
    }

    searchTerm = searchTerm.toLowerCase(); 

    return products.filter(product =>
      // Check if product includes the search term
      product.name.toLowerCase().includes(searchTerm) || 
      product.price.toString().toLowerCase().includes(searchTerm) || 
      product.category.toLowerCase().includes(searchTerm) 
    );
  }

}
