import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { NavConfig } from '../models/nav-config';
import { Role } from '../models/role';


@Injectable({
  providedIn: 'root'
})
export class VerticalNavService {

  constructor(private router: Router) { }

  getNavConfig(roles: Role[]): NavConfig {

    let navConfig: NavConfig = {} as NavConfig;

    if (roles.some((r: Role) => r.isAdminRole)) {

      navConfig.adminMenu = {
        menuHeader: 'Admin',
        menuItems: [
          {
            label: 'Users',
            icon: 'pi pi-users',
            items: [
              {
                label: 'Create New Users',
                command: (event) => {
                  this.router.navigate(['f/create-new-user'])
                }
              },
              {
                label: 'Roles and Permissions',
              }
            ]
          },
          {
            label: 'Company Profile',
            icon: 'pi pi-building',
            items: [
              {
                label: 'Edit',
                command: (event) => {
                  this.router.navigate(['f/company-profile/edit'])
                }
              },
              {
                label: 'Status: Active',
                command: (event) => {
                  this.router.navigate(['f/company-profile/view'])
                }
              }
            ]
          },
          {
            label: 'Projects',
            icon: 'pi pi-folder',
            items: [
              {
                label: 'Edit'
              },
              {
                label: 'Archive'
              }
            ]
          },
          {
            label: 'Company Account',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Subscription'
              },
              {
                label: 'Edit'
              }
            ]
          }
        ] as MenuItem[]
      };
    } else {
      navConfig.adminMenu = undefined;
    }

    if (roles.some((r: Role) => r.isPubRole)) {

      navConfig.publisherMenu = {
        menuHeader: 'Publisher',
        menuItems: [
          {
            label: 'Technical Library',
            icon: 'pi pi-book',
            items: [
              {
                label: 'View All Content'
              },
              {
                label: 'Add New Content'
              }
            ]
          }
        ]
      }
    } else {
      navConfig.publisherMenu = undefined;
    }

    return navConfig;
  }
}
