import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-monitoring",
  templateUrl: "./monitoring.component.html",
  styleUrls: ["./monitoring.component.scss"],
  moduleId: module.id,
})
export class MonitoringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onOpenMap(){
    console.log("Open map btn Tapped!");
  }

  onShowFeed(){
    console.log("Show Feed btn tapped!");
  }

}
