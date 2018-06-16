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
}
