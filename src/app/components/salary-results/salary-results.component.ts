import { Component, Input } from '@angular/core';
import { SalaryCalculationResult } from '../../models/salary-calculation-result.model';

@Component({
  selector: 'app-salary-results',
  templateUrl: './salary-results.component.html',
  styleUrls: ['./salary-results.component.css']
})
export class SalaryResultsComponent {
  @Input() result!: SalaryCalculationResult;
}
