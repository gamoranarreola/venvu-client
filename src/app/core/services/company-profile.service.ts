import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileDataService {

  private employeeCountRanges: {value: string; text: string;}[] = [
    { value: '1TO4', text: '1 to 4' },
    { value: '5TO9', text: '5 to 9' },
    { value: '10TO19', text: '10 to 19' },
    { value: '20TO49', text: '20 to 49' },
    { value: '50TO99', text: '50 to 99' },
    { value: '100TO249', text: '100 to 249' },
    { value: '500TO999', text: '500 to 999' },
    { value: '1000PLUS', text: '1000+' }
  ];

  private yearlyRevenueRanges: {value: string; text: string;}[] = [
    { value: 'U500K', text: 'Under $500,000' },
    { value: '500KTO999K', text: '$500,000 to $999,999' },
    { value: '1MTOU2P5M', text: '$1,000,000 to $2,499,999' },
    { value: '2P5MTOU5M', text: '$2,500,000 to $4,999,999' },
    { value: '5MTOU10M', text: '$5,000,000 to $9,999,999' },
    { value: '100MTOU500M', text: '$100,000,000 to $499,999,999' },
    { value: '1BPLUS', text: '$1,000,000,000+' }
  ];

  constructor() { }

  getEmployeeCountRanges(): {value: string; text: string;}[] {
    return this.employeeCountRanges;
  }

  getYearlyRevenueRanges(): {value: string; text: string;}[] {
    return this.yearlyRevenueRanges;
  }
}
