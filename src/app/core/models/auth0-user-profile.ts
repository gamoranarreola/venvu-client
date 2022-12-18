import { Role } from "./role";

export class Auth0UserProfile {
  email!: string;
  email_verified!: boolean;
  name!: string;
  nickname!: string;
  picture!: string;
  roles!: Role[];
  user_metadata!: {
    consentGiven: boolean;
    consentTimestamp: number;
  };
  sub!: string;
  updated_at!: string;

  constructor(opts: {}) {
    Object.assign(this, opts);
  }

  isAdmin(): boolean {
    return this.roles.some((r: Role) => r.isAdminRole);
  }

  isPub(): boolean {
    return this.roles.some((r: Role) => r.isPubRole);
  }

  isRep(): boolean {
    return this.roles.some((r: Role) => r.isRepRole);
  }
}
