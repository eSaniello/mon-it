import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ControllerRoutingModule } from "./controller-routing.module";
import { ControllerComponent } from "./controller.component";

@NgModule({
    imports: [NativeScriptCommonModule, ControllerRoutingModule],
    declarations: [ControllerComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ControllerModule {}
