import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountSetupService } from 'src/app/core/services/account-setup.service';
import { environment as env } from 'src/environments/environment';


@Component({
  selector: 'vvu-new-user-profile',
  templateUrl: './new-user-profile.component.html',
  styleUrls: ['./new-user-profile.component.scss']
})
export class NewUserProfileComponent implements OnInit, OnDestroy {

  accountSetup: any
  newUserProfileForm!: FormGroup
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
    this.router.navigate(['f/new-user/roles-and-permissions'])
  }

  next(): void {
    this.router.navigate(['f/new-user/activate'])
  }

  get f(): {[key: string]: AbstractControl} {
    return this.newUserProfileForm.controls
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.accountSetupService.accountSetup$.subscribe(data => this.accountSetup = data)
    )

    this.newUserProfileForm = this.fb.group({
      given_names: new FormControl(this.accountSetup.userData.given_names, [
        Validators.required,
        Validators.pattern(this.inputValidators.personName.pattern)
      ]),
      surnames: new FormControl(this.accountSetup.userData.surnames, [
        Validators.required,
        Validators.pattern(this.inputValidators.personName.pattern)
      ]),
      job_title: new FormControl(this.accountSetup.userData.job_title, [
        Validators.required,
        Validators.pattern(this.inputValidators.textInput.pattern)
      ]),
      department: new FormControl(this.accountSetup.userData.department, [
        Validators.required,
        Validators.pattern(this.inputValidators.textInput.pattern)
      ])
    })

    this.subscriptions.add(this.newUserProfileForm.valueChanges.subscribe(data => {
      this.accountSetup.userData.given_names = data.given_names
      this.accountSetup.userData.surnames = data.surnames
      this.accountSetup.userData.job_title = data.job_title
      this.accountSetup.userData.department = data.department
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
