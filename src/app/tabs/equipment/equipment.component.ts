import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-equipment",
    templateUrl: "./equipment.component.html",
    styleUrls: ["./equipment.component.scss"],
    moduleId: module.id
})
export class EquipmentComponent implements OnInit {
    public droneName: string;
    public dronePostfix: string;
    public connected: boolean;

    constructor() {}

    ngOnInit() {
        this.droneName = "Investigator9000 ";
        this.dronePostfix = "Pro";
        this.connected = false;
    }

    onConnect() {
        console.log("Connect btn tapped");
    }

    onLearnMore() {
        console.log("learn more tapped");
    }
}
