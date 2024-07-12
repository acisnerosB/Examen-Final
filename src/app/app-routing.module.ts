import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryFormComponent } from './components/salary-form/salary-form.component';
import { SalaryResultsComponent } from './components/salary-results/salary-results.component';

const routes: Routes = [
  { path: '', component: SalaryFormComponent },
  { path: 'results', component: SalaryResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
