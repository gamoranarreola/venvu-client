import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { GenericApiResponse } from '../../models/api-responses';
import { ApiService } from '../../services/api.service';
import { AuthService } from '@auth0/auth0-angular';
import { CompanyProfile } from '../../models/company-profile';
import { Account } from '../../models/account';
import { Role } from '../../models/role';


@Injectable({
  providedIn: 'root'
})
export class AccountEndpoint {

  constructor(
    private ApiService: ApiService,
    private auth0Service: AuthService
  ) { }

  getAccount(): Observable<Account> {

    return this.auth0Service.user$.pipe(
      distinctUntilChanged(),
      switchMap((user: any) => {
        return this.ApiService.post(`${env.routes.accounts}`, {
          email: user.email,
          sub: user.sub
        });
      })
    ).pipe(
      map((res: HttpResponse<GenericApiResponse>) => {
        if (res.status === 200 && res.statusText === 'OK') {
          return {
            account_type: res.body?.data?.account_type,
            company_profile: res.body?.data?.company_profile ? new CompanyProfile(res.body?.data?.company_profile) : undefined,
            department: res.body?.data?.department,
            email: res.body?.data?.email,
            given_names: res.body?.data?.given_names,
            id: res.body?.data?.id,
            is_tax_id_verified: res.body?.data?.is_tax_id_verified,
            job_title: res.body?.data?.job_title,
            phone: res.body?.data?.phone,
            state_tax_id: res.body?.data?.state_tax_id,
            sub: res.body?.data?.sub,
            tax_id_state: res.body?.data?.tax_id_state,
            roles: res.body?.data?.roles!.map((r: unknown) => new Role({name: r}))
          } as Account
        } else {
          throw(new Error(''));
        }
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(() => new Error(err.message));
      })
    );
  }
}
