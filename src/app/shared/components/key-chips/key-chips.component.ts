import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

import { environment as env } from 'src/environments/environment'


@Component({
  selector: 'vvu-key-chips',
  templateUrl: './key-chips.component.html',
  styleUrls: ['./key-chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => KeyChipsComponent)
    }
  ]
})
export class KeyChipsComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() keyType!: string
  @Input() isReadOnly = false

  formControl: FormControl = new FormControl('')

  private onChanged!: Function
  private onTouched!: Function
  private unsubscribe$ = new Subject<void>()

  constructor(private messageService: MessageService) { }

  /**
   *
   * @param event OriginalEvent
   */
   addItem(event: any): void {

    const pattern = new RegExp(env.inputValidators.productService.pattern)

    // Make sure length does not exceed 32 characters and string
    // matches textInput regex.
    if (event.value.length <= 32 && pattern.test(event.value)) {

      const updatedSet = [...new Set(this.formControl.value)]

      if (this.formControl.value.length !== updatedSet.length) {

        this.messageService.add({
          severity: 'warning',
          summary: 'Key products and services',
          detail: `Duplicate value "${event.value}" was removed from the list.`,
          life: 5000
        })

        this.formControl.setValue([...new Set(this.formControl.value)])
      }
    } else {

      this.formControl.value.pop()

      this.messageService.add({
        severity: 'warning',
        summary: 'Key products and services',
        detail: `Key products and services cannot exceed 32 characters. ${env.inputValidators.productService.errorMessage}`,
        life: 5000
      })
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn
  }

  writeValue(value: string[]): void {
    this.formControl.setValue(value)
  }

  ngOnInit(): void {

    this.formControl.valueChanges
    .pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(value => {
      this.onChanged && this.onChanged(value) && this.onTouched()
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
