import { NgModule } from "@angular/core";

import { ProfileSettingComponent } from "./profile-setting.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/profile-setting.reducer";
import { CommonModule } from "@angular/common";
import { AttendeeFormModule } from "../../../../components/attendee-form/attendee-form.module";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature("profileSetting", reducers),
        AttendeeFormModule,
        TranslateModule
    ],
    declarations: [ProfileSettingComponent],
    entryComponents: [ProfileSettingComponent]
})
export class ProfileSettingModule {
}
