import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { NewUserService } from '../new-user.service';


@Component({
  selector: 'vvu-new-user-email',
  templateUrl: './new-user-email.component.html',
  styleUrls: ['./new-user-email.component.scss']
})
export class NewUserEmailComponent implements OnInit, OnDestroy {

  newUser: any
  newUserEmailForm!: FormGroup
  inputValidators!: any

  private readonly subscriptions = new Subscription()

  constructor(
    private fb: FormBuilder,
    private newUserService: NewUserService,
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
      this.newUserService.newUserSetup$.subscribe(data => this.newUser = data)
    )

    this.newUserEmailForm = this.fb.group({
      email_address: new FormControl(this.newUser.email_address, [
        Validators.required,
        Validators.email
      ])
    })

    this.subscriptions.add(
      this.newUserEmailForm.valueChanges.subscribe(data => this.newUser.email_address = data.email_address)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
