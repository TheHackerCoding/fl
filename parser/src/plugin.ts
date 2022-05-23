export class Plugin {
    public midiInPort: i32 = 0;
    public midiOutPort: i32 = 0;
    public pitchBendRange: u8 = 0;
    public flags: u32 = 0;
    public numInputs: i32 = 0;
    public numOutputs: i32 = 0;
    public inputInfo: PluginIoInfo[] = [];
    public outputInfo: PluginIoInfo[] = [];
    public infoKind: i32 = 0;
    public vstNumber: u32 = 0;
    public vstId: string = "";
    public guid: u8[] = [];
    public state: u8[] = [];
    public name: string = "";
    public filename: string = "";
    public vendorName: string = "";
}

export class PluginIoInfo {
    public mixerOffset: i32 = 0;
    public flags: u32 = 0;
}