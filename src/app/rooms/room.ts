export class Room {
  constructor(
    public name: string,
    public state: boolean,
    public lastUpdate?: Date,
  ) { }
}
