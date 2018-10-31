import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import * as fromApp from "./store/app.reducers";
import { AppEffects } from "./store/app.effects";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { DashboardModule } from "./features/dashboard/dashboard.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        DashboardModule,
        RouterModule.forRoot(ROUTES),

        StoreModule.forRoot(fromApp.appReducers, { metaReducers: fromApp.appMetaReducers }),
        EffectsModule.forRoot([
            AppEffects
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}