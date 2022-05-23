import { InsertFlags } from "./enums";
import { fill } from "./utils";

export class Insert {
    static MAXSLOTCOUNT: i32 = 10;

    public id: i32 = 0;
    public name: string = "";
    public color: u32 = 0x000000;
    public icon: u16 = 0;
    public flags: InsertFlags = 0;
    public volume: i32 = 0;
    public pan: i32 = 0;
    public stereoSep: i32 = 0;
    public lowLevel: i32 = 0;
    public bandLevel: i32 = 0;
    public highLevel: i32 = 0;
    public lowFreq: i32 = 0;
    public bandFreq: i32 = 0;
    public highFreq: i32 = 0;
    public lowWidth: i32 = 0;
    public bandWidth: i32 = 0;
    public highWidth: i32 = 0;
    public routes: bool[] = fill(false, Insert.MAXSLOTCOUNT);
    public routeVolumes: i32[] = fill;
    public slots: InsertSlot[];
}