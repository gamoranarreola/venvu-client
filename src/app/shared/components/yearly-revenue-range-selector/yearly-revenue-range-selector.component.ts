import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { environment as env } from 'src/environments/environment'
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'vvu-yearly-revenue-range-selector',
  templateUrl: './yearly-revenue-range-selector.component.html',
  styleUrls: ['./yearly-revenue-range-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YearlyRevenueRangeSelectorComponent)
    }
  ]
})
export class YearlyRevenueRangeSelectorComponent implements OnInit, ControlValueAccessor {

  yearlyRevenueRanges!: {code: string; name: string; }[]
  selected!: string

  private onChanged!: Function
  private onTouched!: Function

  constructor(private apiService: ApiService) { }

  selectYearlyRevenueRange() {
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
    this.apiService.get(env.routes.yearlyRevenueRanges, 'get').subscribe(d => {
      this.yearlyRevenueRanges = d.body.data
    })
  }

}
