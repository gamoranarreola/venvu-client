export class Role {
  id!: string;
  name!: string;
  description!: string;
  isAdminRole!: boolean;
  isPubRole!: boolean;
  isRepRole!: boolean;

  constructor(opts: {}) {
    Object.assign(this, opts);
    this.setRoleFlags();
  }

  private setRoleFlags(): void {
    this.isAdminRole = this.name.toLowerCase().includes('adm');
    this.isPubRole = this.name.toLocaleLowerCase().includes('pub');
    this.isRepRole = this.name.toLowerCase().includes('rep');
  }
}
