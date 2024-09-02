import type { Coordinate } from "./common";
import CommunityMember from "./community-member";
import Organization from "./organization";
import type Person from "./person";

export interface ICommunity {
  id: string;
  name: string;
  description: string;
}

export default class Community extends Organization implements ICommunity {
  public id: string;
  public override name: string;
  public description: string;

  /** 社区成员 */
  protected members: CommunityMember[] = [];

  /** 地理边界 */
  public boundary: Coordinate[] = [];

  protected resource = [];

  constructor(community: ICommunity) {
    super({
      name: community.name,
    });
    this.id = community.id;
    this.name = community.name;
    this.description = community.description;
  }

  /**
   * 添加成员
   * @param {Person} person
   */
  public addMember(person: Person): void {
    this.members.push(
      new CommunityMember(person, this.id, new Date().toDateString())
    );
  }

  public printMembers() {
    console.log(this.members);
  }
}
