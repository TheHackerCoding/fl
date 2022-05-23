import { Plugin } from "./plugin";

export default class InsertSlot {
    public volume: i32 = 100;
    public state: i32 = 0;
    public dryWet: i32 = -1;
    public pluginSettings: u8[] = [];
    public plugin: Plugin = new Plugin();
}