import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MissionPage } from '../pages/mission/mission';
import {MissionDetailPage, MissionPage} from '../pages/mission-detail/mission-detail';
import { BeeProvider } from '../providers/bee/bee';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MissionPage,
    MissionDetailPage
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
    MissionDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeeProvider
  ]
})
export class AppModule {}
