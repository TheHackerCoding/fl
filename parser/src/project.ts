export default class Project {
    public mainVolume: i32;
    public mainPitch: i32;
    public ppq: i32;
    public tempo: f64;
    public projectTitle: string = "";
    public comment: string = "";
    public author: string = "";
    public genre: string = "";
    public versionString: string;
    public version: i32
    public channels: Channel[] = [];
    public tracks: Track[];
    public patterns: Pattern[] = [];
    public inserts: Insert[];
    public playTruncatedNotes: bool = false;
}
