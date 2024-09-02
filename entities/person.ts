import type Community from "./community";

export interface IPerson {
  name: string;
  sex: number;
}

export default class Person implements IPerson {
  public name: string;
  public sex: number;

  constructor(person: IPerson) {
    this.name = person.name;
    this.sex = person.sex;
  }

  public joinCommunity(community: Community) {
    community.addMember(this)
  }
}
