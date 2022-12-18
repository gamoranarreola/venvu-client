import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Role } from 'src/app/core/models/role';
import { RolesService } from 'src/app/core/services/roles.service';
import { AccountSetupService } from 'src/app/feature/account-setup/account-setup.service';


@Component({
  selector: 'vvu-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.scss']
})
export class RoleSelectionComponent implements OnInit, OnDestroy {

  @Input() adminPreSelect!: boolean

  accountSetup: any
  accountRoles: string[] = []

  private readonly subscriptions = new Subscription()

  constructor(
    private accountSetupService: AccountSetupService,
    private rolesService: RolesService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.accountSetupService.accountSetup$.subscribe({
        next: data => this.accountSetup = data
      })
    )

    this.subscriptions.add(
      this.rolesService.loadRoles(this.accountSetup.account_type === '_CNS' ? 'Consumer' : 'Vendor').subscribe({
        next: (res: HttpResponse<any>) => {

          res.body.data.map((r: any) => {

              const role = new Role(r)
              this.accountSetup.allRoles.push(role)

              if ((this.adminPreSelect && role.isAdminRole)) {
                this.accountSetupService.setState({
                  selectedRoleNames: [role.name]
                })
              }
            }
          )
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
