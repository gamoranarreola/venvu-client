import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { MessageService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { environment as env } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { ToastModule } from 'primeng/toast';
import { CardModule } from "primeng/card";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [
          `${env.apiHost}${env.routes.accounts}`,
          `${env.apiHost}${env.routes.companyProfiles}`,
          `${env.apiHost}${env.routes.companyProfiles}/*`,
          `${env.apiHost}${env.routes.companyTypes}`,
          `${env.apiHost}${env.routes.companyTypes}/*`,
          `${env.apiHost}${env.routes.employeeCountRanges}`,
          `${env.apiHost}${env.routes.employeeCountRanges}/*`,
          `${env.apiHost}${env.routes.yearlyRevenueRanges}`,
          `${env.apiHost}${env.routes.yearlyRevenueRanges}/*`,
          `${env.apiHost}${env.routes.countries}`,
          `${env.apiHost}${env.routes.industries}`,
          `${env.apiHost}${env.routes.industries}/*`,
          `${env.apiHost}${env.routes.roles}`
        ]
      }
    }),
    HttpClientModule,
    CoreModule,
    SidebarModule,
    ProgressSpinnerModule,
    ToastModule,
    CardModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
