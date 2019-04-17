import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EquipmentComponent } from "./equipment.component";

const routes: Routes = [{ path: "default", component: EquipmentComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EquipmentRoutingModule {}
