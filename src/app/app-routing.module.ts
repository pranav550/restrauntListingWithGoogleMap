import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'restaurant', pathMatch: 'full' },
  {
    path: 'restaurant',
    component: ListComponent
  },
  {
    path: 'restaurant/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
