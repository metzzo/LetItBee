import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Bee, BeeProvider} from "../../providers/bee/bee";
import {MissionPage} from "../mission/mission";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private beeProvider: BeeProvider) {

  }

  selectBee(bee: Bee) {
    console.log(bee);
    this.navCtrl.push(MissionPage);
  }
}
