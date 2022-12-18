import { MenuItem } from "primeng/api";

export interface NavConfig {
  adminMenu: {
    menuHeader: string;
    menuItems: MenuItem[];
  } | undefined,
  publisherMenu: {
    menuHeader: string;
    menuItems: MenuItem[];
  } | undefined
}
