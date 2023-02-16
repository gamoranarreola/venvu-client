import { CompanyProfile } from "./company-profile";
import { Role } from "./role";

export interface Account {
  account_type?: string;
  company_profile?: CompanyProfile;
  department?: string;
  email?: string;
  given_names?: string;
  id?: number;
  is_tax_id_verified?: boolean;
  job_title?: string;
  phone?: string;
  roles?: Role[];
  roleDisplayName?: string;
  state_tax_id?: string;
  sub?: string
  surnames?: string;
  tax_id_state?: string;
  type?: string;
}
