import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Account } from 'src/app/core/models/account';
import { ApiService } from 'src/app/core/services/api.service';
import { AccountStore } from 'src/app/core/state/stores/account.store';
import { environment as env } from 'src/environments/environment'


@Component({
  selector: 'vvu-company-profile-edit',
  templateUrl: './company-profile-edit.component.html',
  styleUrls: ['./company-profile-edit.component.scss']
})
export class CompanyProfileEditComponent implements OnInit, OnDestroy, AfterContentChecked {

  account!: Account
  companyProfileForm!: FormGroup
  inputValidators!: any

  private readonly subscriptions = new Subscription()

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private accountStore: AccountStore,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.inputValidators = env.inputValidators
  }

  get f(): {[key: string]: AbstractControl} {
    return this.companyProfileForm.controls
  }

  onSubmit(): void {

    this.apiService.patch(`${env.routes.companyProfiles}/${this.account?.company_profile?.id}`, this.companyProfileForm.value).subscribe(res => {

      if (res.status === 200 && res.body.success === true) {
        this.subscriptions.add(
          this.accountStore.load().subscribe((data: Account) => {
            this.account = data
          })
        )
      }
    })
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.accountStore.load().subscribe((data: Account) => {
        this.account = data
        this.setupForm()
      })
    )
  }

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  private setupForm(): void {

    this.companyProfileForm = this.fb.group({
      address_line_1: new FormControl(this.account.company_profile?.address_line_1, [
        Validators.required,
        Validators.pattern(this.inputValidators.addressLine.pattern)
      ]),
      address_line_2: new FormControl(this.account.company_profile?.address_line_2, Validators.required),
      address_line_3: new FormControl(this.account.company_profile?.address_line_3, Validators.required),
      city: new FormControl(this.account.company_profile?.city, [
        Validators.required,
        Validators.pattern(this.inputValidators.placeName.pattern)
      ]),
      company_type: new FormControl(this.account.company_profile?.company_type, Validators.required),
      country: new FormControl(this.account.company_profile?.country, Validators.required),
      description: new FormControl(this.account.company_profile?.description, Validators.pattern(this.inputValidators.textInput.pattern)),
      employee_count_range: new FormControl(this.account.company_profile?.employee_count_range, Validators.required),
      founded: new FormControl(this.account.company_profile?.founded),
      industry: new FormControl(this.account.company_profile?.industry, Validators.required),
      key_products: new FormControl(this.account.company_profile?.key_products, Validators.required),
      key_services: new FormControl(this.account.company_profile?.key_services, Validators.required),
      name: new FormControl(this.account.company_profile?.name, [
        Validators.required,
        Validators.pattern(this.inputValidators.orgName.pattern)
      ]),
      parent_company: new FormControl(this.account.company_profile?.parent_company, Validators.pattern(this.inputValidators.textInput.pattern)),
      postal_code: new FormControl(this.account.company_profile?.postal_code, [
        Validators.required,
        Validators.pattern(this.inputValidators.alphaNumHyphen.pattern)
      ]),
      state_province: new FormControl(this.account.company_profile?.state_province, [
        Validators.required,
        Validators.pattern(this.inputValidators.placeName.pattern)
      ]),
      state_tax_id: new FormControl(this.account.company_profile?.state_tax_id, [
        Validators.required,
        Validators.pattern(this.inputValidators.alphaNumHyphen.pattern)
      ]),
      tax_id_state: new FormControl(this.account.company_profile?.tax_id_state, [
        Validators.required,
        Validators.pattern(this.inputValidators.placeName.pattern)
      ]),
      website: new FormControl(this.account.company_profile?.website, Validators.pattern(this.inputValidators.webURL.pattern)),
      yearly_revenue_range: new FormControl(this.account.company_profile?.yearly_revenue_range, Validators.required)
    })
  }

}
