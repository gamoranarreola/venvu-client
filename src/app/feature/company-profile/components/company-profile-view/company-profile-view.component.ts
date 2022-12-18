import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Subscription, switchMap } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { Account } from 'src/app/core/models/account';
import { AccountStore } from 'src/app/core/state/stores/account.store';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'vvu-company-profile-view',
  templateUrl: './company-profile-view.component.html',
  styleUrls: ['./company-profile-view.component.scss']
})
export class CompanyProfileViewComponent implements OnInit, OnDestroy {

  account?: Account | undefined
  industryName?: string
  employeeCountRange?: string
  yearlyRevenueRange?: string
  companyType?: string
  chipsForm!: FormGroup

  private readonly subscriptions = new Subscription()

  constructor(
    private accountStore: AccountStore,
    private apiService: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.accountStore
        .load()
        .pipe(
          switchMap((data: any) => {
            this.account = data

            return forkJoin([
              this.apiService.get(`${env.routes.industries}/${this.account?.company_profile?.industry}`, 'get'),
              this.apiService.get(`${env.routes.employeeCountRanges}/${this.account?.company_profile?.employee_count_range}`, 'get'),
              this.apiService.get(`${env.routes.yearlyRevenueRanges}/${this.account?.company_profile?.yearly_revenue_range}`, 'get'),
              this.apiService.get(`${env.routes.companyTypes}/${this.account?.company_profile?.company_type}`, 'get')
            ])
          })
        ).subscribe(([industry, employees, yearlyRevenue, companyType]) => {
          this.industryName = industry.body.data.name
          this.employeeCountRange = employees.body.data
          this.yearlyRevenueRange = yearlyRevenue.body.data
          this.companyType = companyType.body.data
          this.setupForm()
        })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  private setupForm(): void {

    this.chipsForm = this.fb.group({
      key_products: new FormControl(
        this.account?.company_profile?.key_products,
        Validators.required
      ),
      key_services: new FormControl(
        this.account?.company_profile?.key_services,
        Validators.required
      )
    })

    this.chipsForm.controls.key_products.disable()
    this.chipsForm.controls.key_services.disable()
  }

}
