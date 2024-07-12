import { Injectable } from '@angular/core';
import { SalaryCalculationRequest } from '../models/salary-calculation-request.model';
import { SalaryCalculationResult } from '../models/salary-calculation-result.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {
  calculateSalary(request: SalaryCalculationRequest): SalaryCalculationResult {
    const regularSalary = request.hoursWorked * request.hourlyRate;
    const overtimeSalary = request.overtimeHours * request.hourlyRate * 1.5;
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
