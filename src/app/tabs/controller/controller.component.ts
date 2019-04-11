import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
  moduleId: module.id,
})
export class ControllerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSetDestination(){
    console.log("Set Destination btn tapped!");
  }

  onOpenController(){
    console.log("Open Controller btn Tapped!");
  }

}
