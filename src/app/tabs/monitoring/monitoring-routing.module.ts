import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MonitoringComponent } from "./monitoring.component";

const routes: Routes = [{ path: "default", component: MonitoringComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MonitoringRoutingModule {}
