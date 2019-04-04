import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MonitoringRoutingModule } from "./monitoring-routing.module";
import { MonitoringComponent } from "./monitoring.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MonitoringRoutingModule
    ],
    declarations: [
        MonitoringComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MonitoringModule { }
