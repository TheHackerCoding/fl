export default class Pattern {
  public id: i32 = 0
  public name: string = ""
  public notes: Map<Channel, Note[]> = new Map()
}
