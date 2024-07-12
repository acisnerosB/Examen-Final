import { Component } from '@angular/core';
import { SalaryCalculationResponse } from './models/salary-calculation-response.model';

@Component({
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
