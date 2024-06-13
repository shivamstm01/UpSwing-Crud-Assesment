import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './Components/add-data/add-data.component';
import { EditDataComponent } from './Components/edit-data/edit-data.component';
import { ReadDataComponent } from './Components/read-data/read-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFilterPipe } from './Pipes/product-filter.pipe';
import { TableModule } from 'primeng/table'; // Import TableModule from PrimeNG

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    EditDataComponent,
    ReadDataComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
