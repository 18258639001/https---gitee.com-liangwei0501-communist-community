export interface IOrganization {
  name: string;
}

export default class Organization {
  name: string;

  constructor(organization: IOrganization) {
    this.name = organization.name;

  }
}
