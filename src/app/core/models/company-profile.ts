import { isEmpty } from 'lodash';

export class CompanyProfile {
  address_line_1?: string;
  address_line_2?: string;
  address_line_3?: string;
  city?: string;
  company_type?: string;
  country?: string;
  description?: string;
  employee_count_range?: string;
  founded?: number;
  id?: number;
  industry?: number;
  key_products?: string[];
  key_services?: string[];
  name?: string;
  parent_company?: string;
  postal_code?: string;
  state_province?: string;
  website?: string;
  yearly_revenue_range?: string;

  constructor(opts: {}) {
    Object.assign(this, opts);
  }

  isComplete(): boolean {
    return (
      !isEmpty(this.address_line_1) &&
      !isEmpty(this.city) &&
      !isEmpty(this.company_type) &&
      !isEmpty(this.country) &&
      !isEmpty(this.description) &&
      !isEmpty(this.employee_count_range) &&
      !isEmpty(this.industry) &&
      !isEmpty(this.key_products) &&
      !isEmpty(this.key_services) &&
      !isEmpty(this.name) &&
      !isEmpty(this.postal_code) &&
      !isEmpty(this.state_province) &&
      !isEmpty(this.yearly_revenue_range)
    );
  }
}
