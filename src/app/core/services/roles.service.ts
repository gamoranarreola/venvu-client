import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private apiService: ApiService) { }

  loadRoles(account_type: string): Observable<HttpResponse<any>> {
    return this.apiService.get(`${env.routes.roles}?account_type=${account_type}`, 'get')
  }
}
