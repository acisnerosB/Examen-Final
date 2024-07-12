import { Component, Input } from '@angular/core';
import { SalaryCalculationResponse } from '../../models/salary-calculation-response.model';

@Component({
  selector: 'app-salary-results',
  templateUrl: './salary-results.component.html',
  styleUrls: ['./salary-results.component.css']
})
export class SalaryResultsComponent {
  @Input() result!: SalaryCalculationResponse;
}
