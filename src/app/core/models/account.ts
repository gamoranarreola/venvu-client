import { CompanyProfile } from "./company-profile";
import { Role } from "./role";

export class Account {
  account_type?: string;
  company_profile?: CompanyProfile;
  department?: string;
  email?: string;
  given_names?: string;
  id?: number;
  job_title?: string;
  phone?: string;
  roles?: Role[];
  roleDisplayName?: string;
  sub?: string
  surnames?: string;
  type?: string;

  constructor(opts: {}) {
    Object.assign(this, opts);
  }
}
