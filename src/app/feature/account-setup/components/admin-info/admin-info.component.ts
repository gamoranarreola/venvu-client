import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountSetupService } from '../../account-setup.service';
import { environment as env } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vvu-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit, OnDestroy {

  accountSetup: any
  adminInfoForm!: FormGroup
  inputValidators!: any

  private readonly subscriptions = new Subscription()

  constructor(
    private fb: FormBuilder,
    private accountSetupService: AccountSetupService,
    private router: Router
  ) {
    this.inputValidators = env.inputValidators
  }

  prev(): void {
    this.router.navigate(['f/account-setup/account-type'])
  }

  next(): void {
    this.router.navigate(['f/account-setup/account-roles'])
  }

  get f(): {[key: string]: AbstractControl} {
    return this.adminInfoForm.controls
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.accountSetupService.accountSetup$.subscribe(data => this.accountSetup = data)
    )

    this.adminInfoForm = this.fb.group({
      given_names: new FormControl(this.accountSetup.adminInfo.given_names, [
        Validators.required,
        Validators.pattern(this.inputValidators.personName.pattern)
      ]),
      surnames: new FormControl(this.accountSetup.adminInfo.surnames, [
        Validators.required,
        Validators.pattern(this.inputValidators.personName.pattern)
      ]),
      department: new FormControl(this.accountSetup.adminInfo.department, [
        Validators.required,
        Validators.pattern(this.inputValidators.textInput.pattern)
      ]),
      job_title: new FormControl(this.accountSetup.adminInfo.job_title, [
        Validators.required,
        Validators.pattern(this.inputValidators.textInput.pattern)
      ])
    })

    this.subscriptions.add(
      this.adminInfoForm.valueChanges.subscribe(data => this.accountSetup.adminInfo = data)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
