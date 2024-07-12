import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeRegistrationRequest } from '../../models/employee-registration-request.model';
import { SalaryCalculationService } from '../../services/salary-calculation.service';
import { SalaryCalculationResponse } from '../../models/salary-calculation-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css']
})
export class SalaryFormComponent {
  @Output() salaryCalculated = new EventEmitter<SalaryCalculationResponse>();
  salaryForm: FormGroup;

  constructor(private fb: FormBuilder, private salaryService: SalaryCalculationService, private router: Router) {
    this.salaryForm = this.fb.group({
      name: ['', Validators.required],
      hourlyWage: [0, [Validators.required, Validators.min(1)]],
      hoursWorked: [0, [Validators.required, Validators.min(1)]],
      overtimeHours: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.salaryForm.valid) {
      const formValues: EmployeeRegistrationRequest = this.salaryForm.value;
      const result = this.salaryService.calculateSalary(formValues);
      this.salaryCalculated.emit(result);

      // Navegar a la página de resultados pasando el estado
      this.router.navigate(['/results'], { state: result });
    }
  }
}
