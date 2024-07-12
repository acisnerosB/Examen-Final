import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryCalculationRequest } from '../../models/salary-calculation-request.model';
import { SalaryCalculationService } from '../../services/salary-calculation.service';
import { SalaryCalculationResult } from '../../models/salary-calculation-result.model';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css']
})
export class SalaryFormComponent {
  @Output() salaryCalculated = new EventEmitter<SalaryCalculationResult>();
  salaryForm: FormGroup;

  constructor(private fb: FormBuilder, private salaryService: SalaryCalculationService) {
    this.salaryForm = this.fb.group({
      name: ['', Validators.required],
      hourlyRate: [0, [Validators.required, Validators.min(1)]],
      hoursWorked: [0, [Validators.required, Validators.min(1)]],
      overtimeHours: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.salaryForm.valid) {
      const formValues: SalaryCalculationRequest = this.salaryForm.value;
      const result = this.salaryService.calculateSalary(formValues);
      this.salaryCalculated.emit(result);
    }
  }
}
