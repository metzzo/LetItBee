import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissionProgressPage } from './mission-progress';

@NgModule({
  declarations: [
    MissionProgressPage,
  ],
  imports: [
    IonicPageModule.forChild(MissionProgressPage),
  ],
})
export class MissionProgressPageModule {}
