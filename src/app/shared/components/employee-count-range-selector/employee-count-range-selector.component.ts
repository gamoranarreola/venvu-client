import { Component, forwardRef, OnInit } from '@angular/core';

import { environment as env } from 'src/environments/environment'
import { ApiService } from 'src/app/core/services/api.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vvu-employee-count-range-selector',
  templateUrl: './employee-count-range-selector.component.html',
  styleUrls: ['./employee-count-range-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => EmployeeCountRangeSelectorComponent)
    }
  ]
})
export class EmployeeCountRangeSelectorComponent implements OnInit {

  employeeCountranges!: {code: string; name: string; }[]
  selected!: string

  private onChanged!: Function
  private onTouched!: Function

  constructor(private apiService: ApiService) { }

  selectEmployeeCountRange() {
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
    this.apiService.get(env.routes.employeeCountRanges, 'get').subscribe(d => {
      this.employeeCountranges = d.body.data
    })
  }

}
