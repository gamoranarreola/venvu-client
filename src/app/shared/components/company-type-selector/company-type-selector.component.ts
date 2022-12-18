import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { environment as env } from 'src/environments/environment'
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'vvu-company-type-selector',
  templateUrl: './company-type-selector.component.html',
  styleUrls: ['./company-type-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CompanyTypeSelectorComponent)
    }
  ]
})
export class CompanyTypeSelectorComponent implements OnInit, ControlValueAccessor {

  companyTypes!: {code: string; name: string; }[]
  selected!: string

  private onChanged!: Function
  private onTouched!: Function

  constructor(private apiService: ApiService) { }

  selectCompanyType() {
    this.onTouched()
    this.onChanged(this.selected)
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn
  }

  writeValue(value: string): void {
    this.selected = value
  }

  ngOnInit(): void {
    this.apiService.get(env.routes.companyTypes, 'get').subscribe(d => {
      this.companyTypes = d.body.data
    })
  }

}
