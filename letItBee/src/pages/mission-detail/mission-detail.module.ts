import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissionDetailPage } from './mission-detail';

@NgModule({
  declarations: [
    MissionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MissionDetailPage),
  ],
})
export class MissionDetailPageModule {}
