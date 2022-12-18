import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/core/models/account';
import { CompanyProfile } from 'src/app/core/models/company-profile';
import { Role } from 'src/app/core/models/role';
import { ApiService } from 'src/app/core/services/api.service';
import { WindowRefService } from 'src/app/core/services/window-ref.service';
import { AccountStore } from 'src/app/core/state/stores/account.store';

import { environment as env } from 'src/environments/environment';
import { AccountSetupService } from '../../account-setup.service';

@Component({
  selector: 'vvu-company-verification',
  templateUrl: './company-verification.component.html',
  styleUrls: ['./company-verification.component.scss']
})
export class CompanyVerificationComponent implements OnInit, OnDestroy {

  account!: Account | undefined;
  accountSetup: any
  companyVerificationForm!: FormGroup
  inputValidators!: any

  private subscriptions = new Subscription()

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountSetupService: AccountSetupService,
    private apiService: ApiService,
    private messageService: MessageService,
    private accountStore: AccountStore,
    private windowRefService: WindowRefService
  ) {
    this.inputValidators = env.inputValidators
  }

  prev(): void {
    this.router.navigate(['f/account-setup/account-roles'])
  }

  onSubmit(): void {

    const companyProfileData = {
      email: this.account?.email,
      account: {
        account_type: this.accountSetup.account_type,
        given_names: this.accountSetup.adminInfo.given_names,
        surnames: this.accountSetup.adminInfo.surnames,
        department: this.accountSetup.adminInfo.department,
        job_title: this.accountSetup.adminInfo.job_title,
        roles: this.accountSetup.selectedRoleNames
      } as Account,
      company_profile: {
        name: this.accountSetup.companyProfile.name,
        parent_company: this.accountSetup.companyProfile.parent_company,
        website: this.accountSetup.companyProfile.website,
        state_tax_id: this.accountSetup.companyProfile.state_tax_id,
        tax_id_state: this.accountSetup.companyProfile.tax_id_state
      } as CompanyProfile,
      selectedRoleIds: this.accountSetup.selectedRoleNames.map((roleName: string) => this.accountSetup.allRoles.find((role: Role) => role.name === roleName).id)
    }

    this.apiService.post(`${env.routes.companyProfiles}`, companyProfileData).subscribe({
      next: (data) => {
        if (data.status === 200 && data.statusText === 'OK') {

          this.messageService.add({
            severity: 'info',
            summary: 'Account Setup',
            detail: 'You have successfully defined your account type and basic company profile. In order to appear in the company catalog, you will need to provide additional information about your company.',
            sticky: true
          })

          this.windowRefService.nativeWindow.location.href = `${window.location.hostname}/f/dashboard`
        } else {

          this.messageService.add({
            severity: 'error',
            summary: 'Account Setup',
            detail: 'We were unable to process your request.',
            sticky: true
          })
        }
      },
      error: (res) => {

        this.messageService.add({
          severity: 'error',
          summary: 'Account Setup',
          detail: res.error.error,
          life: 5000
        })
      }
    })
  }

  get f(): {[key: string]: AbstractControl} {
    return this.companyVerificationForm.controls
  }

  ngOnInit(): void {

    this.account = this.accountStore.get()

    this.subscriptions.add(
      this.accountSetupService.accountSetup$.subscribe(data => this.accountSetup = data)
    )

    this.companyVerificationForm = this.fb.group({
      name: new FormControl(this.accountSetup.companyProfile.name, [
        Validators.required,
        Validators.pattern(this.inputValidators.textInput.pattern)
      ]),
      parent_company: new FormControl(this.accountSetup.companyProfile.parent_company, Validators.pattern(env.inputValidators.textInput.pattern)),
      website: new FormControl(this.accountSetup.companyProfile.website, Validators.pattern(env.inputValidators.webURL.pattern)),
      state_tax_id: new FormControl(this.accountSetup.companyProfile.state_tax_id, [
        Validators.required,
        Validators.pattern(this.inputValidators.alphaNumHyphen.pattern)
      ]),
      tax_id_state: new FormControl(this.accountSetup.companyProfile.tax_id_state, [
        Validators.required,
        Validators.pattern(this.inputValidators.alphaNumHyphen.pattern)
      ])
    })

    this.subscriptions.add(
      this.companyVerificationForm.valueChanges.subscribe(data => this.accountSetup.companyProfile = data)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
