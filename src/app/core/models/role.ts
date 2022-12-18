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
    this.isAdminRole = this.name.includes('Admin');
    this.isPubRole = this.name.includes('Publisher');
    this.isRepRole = this.name.includes('Rep');
  }
}
