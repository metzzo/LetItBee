import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Characteristic {
  constructor(
    public name: string,
    public level: number) {

  }

  getDescription(): string {
    switch (this.level) {
      case 0: {
        switch (this.name) {
          case 'courage': {
            return "Anxious";
          }
          case 'speed': {
            return "Slow";
          }
          case 'strength': {
            return "weak";
          }
        }
      }
      case 1: {
        return '';
      }
      case 2: {
        switch (this.name) {
          case 'courage': {
            return "Brave";
          }
          case 'speed': {
            return "Fast";
          }
          case 'strength': {
            return "Strong";
          }
        }
      }
    }
    return '';
  }

  compareWith(c: Characteristic): string {
    if (this.level <= c.level || this.name != c.name) {
      return '';
    }

    switch (this.name) {
      case 'courage': {
        return "Braver";
      }
      case 'speed': {
        return "Faster";
      }
      case 'strength': {
        return "Stronger";
      }
    }
  }
}

export class Bee {
  constructor(
    public name: string,
    public beePicture: string,
    public characteristics: Characteristic[]) {

  }

  getCharacteristic(name: string): Characteristic {
    for (let c of this.characteristics) {
      if (c.name == name) {
        return c;
      }
    }
    return null;
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

const brave = new Characteristic("courage", 2);
const normalCourage = new Characteristic("courage", 1);
const anxious = new Characteristic("courage", 0);
const slow = new Characteristic("speed", 0);
const normalSpeed = new Characteristic("speed", 1);
const fast = new Characteristic("speed", 2);
const strong = new Characteristic("strength", 2);
const normalStrength = new Characteristic("strength", 1);
const weak = new Characteristic("strength", 0);

@Injectable()
export class BeeProvider {

  constructor() {

  }

  getBees(): Bee[] {
    return [
      new Bee("Horst", "assets/imgs/bee1.jpeg", [brave, slow, normalStrength]),
      new Bee("Anna","assets/imgs/bee2.jpg", [fast, weak, normalCourage]),
      new Bee("Franziska","assets/imgs/bee3.jpg", [brave, strong, normalSpeed]),
      new Bee("Boris","assets/imgs/bee4.jpeg", [anxious, fast, normalStrength])
    ];
  }

  getMissions(): Mission[]{
    const bees = [
      new Bee("Gertrud","assets/imgs/bee3.jpg", [anxious, weak, normalSpeed]),
      new Bee("Lukas","assets/imgs/bee4.jpeg", [slow, fast, normalStrength]),
      new Bee("Horst", "assets/imgs/bee1.jpeg", [brave, fast, strong]),
      new Bee("Anna","assets/imgs/bee2.jpg", [anxious, weak, slow]),
    ];

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
