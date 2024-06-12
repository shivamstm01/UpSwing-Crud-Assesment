import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './Components/add-data/add-data.component';
import { EditDataComponent } from './Components/edit-data/edit-data.component';
import { ReadDataComponent } from './Components/read-data/read-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-data', pathMatch: 'full'},

  {path:'add-data',component:AddDataComponent},
  {path:'edit-data/:id',component:EditDataComponent},
  {path:'read-data',component:ReadDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
