import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EquipmentRoutingModule } from "./equipment-routing.module";
import { EquipmentComponent } from "./equipment.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EquipmentRoutingModule
    ],
    declarations: [
        EquipmentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EquipmentModule { }
