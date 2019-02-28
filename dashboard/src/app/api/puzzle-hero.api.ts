import { Injectable } from "@angular/core";
import { CSGamesApi } from "./csgames.api";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PuzzleHero, PuzzleHeroInfo, Score, TeamSeries } from "./models/puzzle-hero";

@Injectable()
export class PuzzleHeroApi extends CSGamesApi {
    constructor(private http: HttpClient) {
        super("puzzle-hero");
    }

    public getInfo(): Observable<PuzzleHeroInfo> {
        return this.http.get<PuzzleHeroInfo>(this.url("info"), { withCredentials: true });
    }

    public getPuzzleHero(): Observable<PuzzleHero> {
        return this.http.get<PuzzleHero>(this.url(), { withCredentials: true });
    }

    public getScoreboard(): Observable<Score[]> {
        return this.http.get<Score[]>(this.url("scoreboard"), { withCredentials: true });
    }

    public getTeamsSeries(teamsIds: string[]): Observable<TeamSeries[]> {
        return this.http.get<TeamSeries[]>(this.url(`team-series?teams-ids=${teamsIds.join(",")}`), { withCredentials: true });
    }

    public validatePuzzleHero(puzzleId: string, answer: string): Observable<void> {
        return this.http.post<void>(this.url(`puzzle/${puzzleId}/validate`), { answer }, { withCredentials: true });
    }
}