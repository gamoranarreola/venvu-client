import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'vvu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showSpinner!: boolean;
  title = 'VENVU Client';

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {

    this.spinnerService.visibility.subscribe((data: boolean) => {
      this.showSpinner = data;
    })
  }
}
