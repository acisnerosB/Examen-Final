import { Component, Input, OnInit } from '@angular/core';
import { SalaryCalculationResponse } from '../../models/salary-calculation-response.model';
import { Router } from '@angular/router';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-salary-results',
  templateUrl: './salary-results.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    CurrencyPipe,
    CommonModule,
  ],
  styleUrls: ['./salary-results.component.css']
})
export class SalaryResultsComponent implements OnInit {
  result!: SalaryCalculationResponse;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    this.result = navigation?.extras?.state as SalaryCalculationResponse;
  }
}
