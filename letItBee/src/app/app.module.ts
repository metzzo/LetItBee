import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MissionPage } from '../pages/mission/mission';
import { MissionDetailPage } from '../pages/mission-detail/mission-detail';
import { BeeProvider } from '../providers/bee/bee';
import {CompareBeePage} from "../pages/compare-bee/compare-bee";
import {MissionProgressPage} from "../pages/mission-progress/mission-progress";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MissionPage,
    MissionDetailPage,
    CompareBeePage,
    MissionProgressPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MissionPage,
    MissionDetailPage,
    CompareBeePage,
    MissionProgressPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeeProvider
  ]
})
export class AppModule {}
