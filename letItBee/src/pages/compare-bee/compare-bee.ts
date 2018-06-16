import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Bee} from "../../providers/bee/bee";

/**
 * Generated class for the CompareBeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compare-bee',
  templateUrl: 'compare-bee.html',
})
export class CompareBeePage {
  private bee1: Bee;
  private bee2: Bee;

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private navParams: NavParams) {
    this.bee1 = navParams.get('bee1');
    this.bee2 = navParams.get('bee2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompareBeePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
