export class Recipe {
  public name: string;
  public description: string;
  public iamgePath: string;

  constructor(name: string, description: string, iamgePath: string) {
    this.name = name;
    this.description = description;
    this.iamgePath = iamgePath;
  }
}
