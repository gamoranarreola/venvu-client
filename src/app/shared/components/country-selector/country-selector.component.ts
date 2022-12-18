import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { environment as env } from 'src/environments/environment'
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'vvu-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CountrySelectorComponent)
    }
  ]
})
export class CountrySelectorComponent implements OnInit, ControlValueAccessor {

  countries!: {code: string; country_code: string; name: string; }[]
  selected!: string

  private onChanged!: Function
  private onTouched!: Function

  constructor(private apiService: ApiService) { }

  selectCountry() {
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
    this.apiService.get(env.routes.countries, 'get').subscribe(d => {
      this.countries = d.body.data
    })
  }

}
