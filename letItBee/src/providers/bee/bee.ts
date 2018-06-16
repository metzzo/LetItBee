import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Characteristic {
  constructor(
    public name: string
  ) {

  }
}

export class Bee {
  constructor(
    public name: string,
    public beePicture: string,
    public characteristics: Characteristic[]) {

  }
}

export class Review {
  constructor(
    public bee: Bee,
    public comment: string) {

  }
}

export class Mission {
  constructor(
    public name: string,
    public missionPicture: string,
    public location: string,
    public inProgress: number,
    public finished: number,
    public reviews: Review[]) {

  }
}

/*
  Generated class for the BeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeeProvider {

  constructor() {

  }

  getBees(): Bee[] {
    const brave = new Characteristic("Brave");
    const anxious = new Characteristic("Anxious");
    const slow = new Characteristic("Slow");
    const fast = new Characteristic("Fast");
    const strong = new Characteristic("Strong");
    const weak = new Characteristic("Weak");

    return [
      new Bee("Horst", "assets/imgs/bee1.jpeg", [brave, slow, strong]),
      new Bee("Anna","assets/imgs/bee2.jpg", [anxious, fast, weak]),
      new Bee("Franziska","assets/imgs/bee3.jpg", [brave, weak, slow]),
      new Bee("Boris","assets/imgs/bee4.jpeg", [anxious, slow, weak])
    ];
  }

  getMissions(): Mission[]{
    const bees = this.getBees();

    return [
      new Mission("Pollinate Sunflower", "assets/imgs/mission1.jpeg", "Behind the house", 0, 3, [
        new Review(bees[0], "Very cool mission! There were no problems."),
        new Review(bees[1], "It was okay."),
        new Review(bees[2], "OMG it was so bad."),
      ]),
      new Mission("Pollinate Daisy", "assets/imgs/mission2.jpg", "On the grassland", 3, 5, [
        new Review(bees[2], "There was a big spider, it went terribly wrong."),
        new Review(bees[3], "No problems at all!"),
      ]),
      new Mission("Pollinate Rose", "assets/imgs/mission3.jpg", "Next to the street", 1, 10, [
        new Review(bees[1], "I nearly got hit by a car and it is way too far. DO NOT RECOMMEND.")
      ])
    ]
  }
}
