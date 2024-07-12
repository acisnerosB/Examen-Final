import { Component } from '@angular/core';
import { SalaryCalculationResponse } from './models/salary-calculation-response.model';
import {RouterOutlet} from "@angular/router";
import {SalaryFormComponent} from "./components/salary-form/salary-form.component";
import {SalaryResultsComponent} from "./components/salary-results/salary-results.component";

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    SalaryFormComponent,
    SalaryResultsComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  salaryResult!: SalaryCalculationResponse;

  onSalaryCalculated(result: SalaryCalculationResponse) {
    this.salaryResult = result;
  }
}
