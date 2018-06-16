import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Bee, Mission} from "../../providers/bee/bee";
import {CompareBeePage} from "../compare-bee/compare-bee";
import {MissionProgressPage} from "../mission-progress/mission-progress";

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
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private navParams: NavParams) {
    this.bee = this.navParams.get('bee');
    this.mission = this.navParams.get('mission');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionDetailPage');
  }

  compareBee(bee: Bee) {
    const modal = this.modalCtrl.create(CompareBeePage, {
      bee1: this.bee,
      bee2: bee
    });
    modal.present();
  }

  startMission() {
    this.navCtrl.pop({animate: false});
    this.navCtrl.push(MissionProgressPage);
  }
}
