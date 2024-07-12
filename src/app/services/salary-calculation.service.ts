import { Injectable } from '@angular/core';
import { EmployeeRegistrationRequest } from '../models/employee-registration-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {

  calculateSalary(request: EmployeeRegistrationRequest): SalaryCalculationResponse {
    const regularSalary = request.hoursWorked * request.hourlyWage;
    const overtimeSalary = request.overtimeHours * request.hourlyWage * 1.5;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.10;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary,
      overtimeSalary,
      deductions,
      netSalary
    };
  }
}
