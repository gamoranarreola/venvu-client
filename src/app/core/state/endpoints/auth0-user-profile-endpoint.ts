import { Injectable } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment as env } from '../../../../environments/environment';
import { Auth0UserProfile } from '../../models/auth0-user-profile';
import { Role } from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class Auth0UserProfileEndpoint {

  constructor(private authService: AuthService) { }

  getAuth0UserProfile(): Observable<Auth0UserProfile> {

    return this.authService.user$.pipe(
      map(auth0UserProfile => {

        return new Auth0UserProfile({
          email: auth0UserProfile?.email,
          email_verified: auth0UserProfile?.email_verified,
          name: auth0UserProfile?.name,
          nickname: auth0UserProfile?.nickname,
          picture: auth0UserProfile?.picture,
          roles: auth0UserProfile![env.auth.authorizationParams.audience + '/roles'].map((r: unknown) => new Role({name: r})),
          user_metadata: auth0UserProfile![env.auth.authorizationParams.audience + '/user_metadata'],
          sub: auth0UserProfile?.sub,
          updated_at: auth0UserProfile?.updated_at
        });
      }),
      catchError(err => {
        return throwError(() => new Error(err));
      })
    )
  }
}
