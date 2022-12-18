export class CompanyProfile {
  address_line_1?: string;
  address_line_2?: string;
  address_line_3?: string;
  city?: string;
  company_type?: string;
  country?: string;
  description?: string;
  employee_count_range?: string;
  ext_id?: string;
  founded?: number;
  id?: number;
  industry?: number;
  is_active?: boolean;
  is_tax_id_verified?: boolean;
  key_products?: string[];
  key_services?: string[];
  name?: string;
  parent_company?: string;
  postal_code?: string;
  state_province?: string;
  state_tax_id?: string;
  tax_id_state?: string;
  website?: string;
  yearly_revenue_range?: string;

  constructor(opts: {}) {
    Object.assign(this, opts);
  }
}
