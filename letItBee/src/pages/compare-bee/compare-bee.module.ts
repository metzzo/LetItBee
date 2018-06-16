import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompareBeePage } from './compare-bee';

@NgModule({
  declarations: [
    CompareBeePage,
  ],
  imports: [
    IonicPageModule.forChild(CompareBeePage),
  ],
})
export class CompareBeePageModule {}
