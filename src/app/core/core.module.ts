import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';

import { HorizontalNavComponent } from './components/horizontal-nav/horizontal-nav.component';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';
import { SidebarModule } from 'primeng/sidebar';
import { Auth0UserProfileEndpoint } from './state/endpoints/auth0-user-profile-endpoint';
import { Auth0UserProfileStore } from './state/stores/auth0-user-profile.store';
import { RepMenuComponent } from './components/rep-menu/rep-menu.component';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';



@NgModule({
  declarations: [
    HorizontalNavComponent,
    VerticalNavComponent,
    RepMenuComponent,
    AccountMenuComponent
  ],
  exports: [
    HorizontalNavComponent,
    VerticalNavComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    MenubarModule
  ],
  providers: [
    Auth0UserProfileEndpoint,
    Auth0UserProfileStore
  ]
})
export class CoreModule { }
