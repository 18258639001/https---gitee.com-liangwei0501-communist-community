import Person, { type IPerson } from "./person";

export default class CommunityMember extends Person {
  public communityId: string;
  public joinTime: string;

  constructor(person: IPerson, communityId: string, joinTime: string) {
    super(person);
    this.communityId = communityId;
    this.joinTime = joinTime;
  }
}
