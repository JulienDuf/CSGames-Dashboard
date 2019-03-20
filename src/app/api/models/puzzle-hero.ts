import { Question, QuestionTypes } from "./question";

export enum TrackTypes {
    Crypto = "crypto",
    Gaming = "gaming",
    Scavenger = "scavenger",
    Sponsor = "sponsor",
    Vine = "vine",
    EsotericLanguages = "esoteric_languages",
    DataAnalysis = "data_analysis",
    Recon = "recon",
    Steganography = "steganography",
    Debugging = "debugging",
    Forensics = "forensics",
    Charades = "charades",
    ReverseEngineering = "reverse_engineering",
    CodeGolf = "code_golf",
    Regex = "regex",
    Scripting = "scripting",
    Food = "food",
    Karaoke = "karaoke",
    Pwning = "pwning",
    Authentication = "authentication",
    StaticAnalysis = "static_analysis",
    ArtificialIntelligence = "artificial_intelligence"
}

export interface PuzzleInfo {
    id: string;
    label?: string;
    type?: QuestionTypes;
    completed?: boolean;
    locked?: boolean;
    description?: { [lang: string]: string };
    dependsOn?: string;
    question?: Question;
}

export interface Track {
    _id: string;
    label: string;
    type: TrackTypes;
    puzzles: PuzzleInfo[];
    releaseDate: string;
    endDate: string;
}

export interface PuzzleHero {
    tracks?: Track[];
    open: boolean;
    releaseDate: string | Date;
    endDate: string | Date;
    scoreboardEndDate: string | Date;
}

export interface PuzzleHeroInfo {
    open: boolean;
    scoreboardOpen: boolean;
}

export interface Score {
    teamId: string;
    teamName: string;
    schoolName: string;
    score: number;
}

export interface TeamSeries {
    name: string;
    series: { value: number, name: Date }[];
}
