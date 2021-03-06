import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageOneComponent } from './components/page-one/page-one.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageOneRoutingModule { }
