import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

import { Auth0UserProfile } from "../../models/auth0-user-profile";
import { Auth0UserProfileEndpoint } from "../endpoints/auth0-user-profile-endpoint";
import { Auth0UserProfileStoreState } from "../states/auth0-user-profile.state";
import { Store } from "./store";

@Injectable({
  providedIn: 'root'
})
export class Auth0UserProfileStore extends Store<Auth0UserProfileStoreState> {

  auth0UserProfile$: Observable<Auth0UserProfile | undefined>;

  constructor(private auth0UserEndpoint: Auth0UserProfileEndpoint) {

    super(new Auth0UserProfileStoreState());

    this.auth0UserProfile$ = this.state$.pipe(
      map(state => state.auth0UserProfile!)
    );
  }

  get(): Auth0UserProfile | undefined {
    return this.state.auth0UserProfile;
  }

  load(): Observable<Auth0UserProfile> {

    if (!this.state.auth0UserProfile) {

      return this.auth0UserEndpoint.getAuth0UserProfile().pipe(
        tap((auth0UserProfile: Auth0UserProfile) => {
          this.setState({
            ...this.state,
            auth0UserProfile: auth0UserProfile
          });
        })
      )
    } else {
      return of(this.state.auth0UserProfile);
    }
  }
}
