import { Injectable } from "@angular/core";
import { ScheduleService } from "src/app/providers/schedule.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { LoadActivities, ScheduleActionTypes, ActivitiesLoaded } from "./schedule.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { GlobalError } from "src/app/store/app.actions";

@Injectable()
export class ScheduleEffects {
    constructor(private actions$: Actions,
                private scheduleService: ScheduleService) { }

    @Effect()
    loadActivities4 = this.actions$.pipe(
        ofType<LoadActivities>(ScheduleActionTypes.LoadActivities),
        switchMap((action: LoadActivities) => {
            return this.scheduleService.getActivitiesForEvent(action.eventId).pipe(
                map(activities => new ActivitiesLoaded(activities)),
                catchError(err => of(new GlobalError(err)))
            );
        })
    );
}