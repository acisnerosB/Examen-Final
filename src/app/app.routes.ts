import { Routes } from '@angular/router';
import { SalaryFormComponent } from './components/salary-form/salary-form.component';
import { SalaryResultsComponent } from './components/salary-results/salary-results.component';

export const routes: Routes = [
  { path: '', component: SalaryFormComponent },
  { path: 'results', component: SalaryResultsComponent }
];
