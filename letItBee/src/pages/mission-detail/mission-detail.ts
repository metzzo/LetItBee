import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Bee, Mission} from "../../providers/bee/bee";

/**
 * Generated class for the MissionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mission-detail',
  templateUrl: 'mission-detail.html',
})
export class MissionDetailPage {
  private mission: Mission;
  private bee: Bee;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.bee = this.navParams.get('bee');
    this.mission = this.navParams.get('mission');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionDetailPage');
  }

  compareBee(bee: Bee) {

  }
}
