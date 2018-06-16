import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Bee, BeeProvider, Mission} from "../../providers/bee/bee";
import {MissionDetailPage} from "../mission-detail/mission-detail";

/**
 * Generated class for the MissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mission',
  templateUrl: 'mission.html',
})
export class MissionPage {
  private bee: Bee;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private beeProvider: BeeProvider) {
    this.bee = this.navParams.get('bee');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionPage');
  }

  selectMission(mission: Mission) {
    this.navCtrl.push(MissionDetailPage, {
      bee: this.bee,
      mission: mission
    });
  }
}
