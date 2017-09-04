import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index';
import { DatipersonaliPage } from '../pages/datipersonali/datipersonali';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = DatipersonaliPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
