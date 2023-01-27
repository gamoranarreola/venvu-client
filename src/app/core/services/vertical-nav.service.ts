import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { NavConfig } from '../models/nav-config';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root',
})
export class VerticalNavService {
  constructor(private router: Router) {}

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
                  this.router.navigate(['f/create-new-user']);
                },
                icon: 'pi pi-user-plus',
              },
              {
                label: 'Roles and Permissions',
                icon: 'pi pi-briefcase',
              },
            ],
          },
          {
            label: 'Company Profile',
            icon: 'pi pi-building',
            items: [
              {
                label: 'Edit',
                command: (event) => {
                  this.router.navigate(['f/company-profile/edit']);
                },
                icon: 'pi pi-pencil',
              },
              {
                label: 'Status: Active',
                command: (event) => {
                  this.router.navigate(['f/company-profile/view']);
                },
                icon: 'pi pi-power-off',
              },
            ],
          },
          {
            label: 'Projects',
            icon: 'pi pi-folder',
            items: [
              {
                label: 'Edit',
                icon: 'pi pi-pencil',
              },
              {
                label: 'Archive',
                icon: 'pi pi-save',
              },
            ],
          },
          {
            label: 'Company Account',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Subscription',
                icon: 'pi pi-verified',
              },
              {
                label: 'Edit',
                icon: 'pi pi-pencil',
              },
            ],
          },
        ] as MenuItem[],
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
                label: 'View All Content',
                icon: 'pi pi-folder-open',
              },
              {
                label: 'Add New Content',
                icon: 'pi pi-file',
              },
            ],
          },
        ],
      };
    } else {
      navConfig.publisherMenu = undefined;
    }

    return navConfig;
  }
}
