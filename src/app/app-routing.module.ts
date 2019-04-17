import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        // tslint:disable-next-line: max-line-length
        redirectTo:
            "/(equipmentTab:equipment/default//controllerTab:controller/default//monitoringTab:monitoring/default)",
        pathMatch: "full"
    },

    {
        path: "equipment",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/tabs/equipment/equipment.module#EquipmentModule",
        outlet: "equipmentTab"
    },
    {
        path: "controller",
        component: NSEmptyOutletComponent,
        loadChildren:
            "~/app/tabs/controller/controller.module#ControllerModule",
        outlet: "controllerTab"
    },
    {
        path: "monitoring",
        component: NSEmptyOutletComponent,
        loadChildren:
            "~/app/tabs/monitoring/monitoring.module#MonitoringModule",
        outlet: "monitoringTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
