import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { environment as env } from 'src/environments/environment'
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'vvu-industry-selector',
  templateUrl: './industry-selector.component.html',
  styleUrls: ['./industry-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => IndustrySelectorComponent)
    }
  ]
})
export class IndustrySelectorComponent implements OnInit, ControlValueAccessor {

  industries!: {id: number; name: string; }[]
  selected!: number

  private onChanged!: Function
  private onTouched!: Function

  constructor(private apiService: ApiService) { }

  selectIndustry() {
    this.onTouched()
    this.onChanged(this.selected)
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn
  }

  registerOnChange(fn: Function): void {
    this.onChanged = fn
  }

  writeValue(value: number): void {
    this.selected = value
  }

  ngOnInit(): void {
    this.apiService.get(env.routes.industries, 'get').subscribe(d => {
      this.industries = d.body.data
    })
  }

}
