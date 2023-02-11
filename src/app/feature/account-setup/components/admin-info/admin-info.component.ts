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
  userDataForm!: FormGroup
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
    return this.userDataForm.controls
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.accountSetupService.accountSetup$.subscribe(data => this.accountSetup = data)
    )

    this.userDataForm = this.fb.group({
      given_names: new FormControl(this.accountSetup.userData.given_names, [
        Validators.required,
        Validators.pattern(this.inputValidators.personName.pattern)
      ]),
      surnames: new FormControl(this.accountSetup.userData.surnames, [
        Validators.required,
        Validators.pattern(this.inputValidators.personName.pattern)
      ]),
      department: new FormControl(this.accountSetup.userData.department, [
        Validators.required,
        Validators.pattern(this.inputValidators.textInput.pattern)
      ]),
      job_title: new FormControl(this.accountSetup.userData.job_title, [
        Validators.required,
        Validators.pattern(this.inputValidators.textInput.pattern)
      ])
    })

    this.subscriptions.add(
      this.userDataForm.valueChanges.subscribe(data => this.accountSetup.userData = data)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
