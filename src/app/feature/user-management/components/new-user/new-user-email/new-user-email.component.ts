import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountSetupService } from 'src/app/feature/account-setup/account-setup.service';
import { environment as env } from 'src/environments/environment';


@Component({
  selector: 'vvu-new-user-email',
  templateUrl: './new-user-email.component.html',
  styleUrls: ['./new-user-email.component.scss']
})
export class NewUserEmailComponent implements OnInit, OnDestroy {

  accountSetup: any
  newUserEmailForm!: FormGroup
  inputValidators!: any

  private readonly subscriptions = new Subscription()

  constructor(
    private fb: FormBuilder,
    private accountSetupService: AccountSetupService,
    private router: Router
  ) {
    this.inputValidators = env.inputValidators
  }

  next(): void {
    this.router.navigate(['f/create-new-user/roles-and-permissions'])
  }

  get f(): {[key: string]: AbstractControl} {
    return this.newUserEmailForm.controls
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.accountSetupService.accountSetup$.subscribe(data => this.accountSetup = data)
    )

    this.newUserEmailForm = this.fb.group({
      email_address: new FormControl(this.accountSetup.userData.email_address, [
        Validators.required,
        Validators.email
      ])
    })

    this.subscriptions.add(
      this.newUserEmailForm.valueChanges.subscribe(data => this.accountSetup.userData.email_address = data.email_address)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
