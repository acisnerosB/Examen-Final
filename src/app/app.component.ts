import { Component } from '@angular/core';
import { SalaryCalculationResult } from './models/salary-calculation-result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  salaryResult!: SalaryCalculationResult;

  onSalaryCalculated(result: SalaryCalculationResult) {
    this.salaryResult = result;
  }
}
