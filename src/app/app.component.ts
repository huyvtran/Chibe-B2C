import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { URLVars } from '../providers/urls-var';
import { Http } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { IndexPage } from '../pages/index/index';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TutorialPage;
  //rootPage:any = IndexPage;

  constructor(private storage: Storage, public app: App, public menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public URLVars:URLVars, public http: Http, public events: Events) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      platform.registerBackButtonAction(() => {

          let nav = app.getActiveNavs()[0];
          let activeView = nav.getActive();

          if(activeView.name === "ProfiloPage") {
              console.log("Ciaone");
          }
          else {
            nav.pop();
          }
      });
    });

    events.subscribe('user:logout', () => {
      this.rootPage = HomePage;
    });

    events.subscribe('user:checkSession', () => {
      this.storage.get('session_key').then((session_key) => {
        if(session_key) {
          let setSessionURL = this.URLVars.setSessionURL();
          let body = new URLSearchParams();
          body.append('session_key', session_key);
          this.http.post(setSessionURL, body).subscribe(
            success => {
              console.log(success);
            },
            error => {
              this.rootPage = HomePage;
            }
          );
        }
        else {
          this.rootPage = HomePage;
        }
      });
    });

  }

  logout() {
    let logoutURL = this.URLVars.logoutURL();

    this.http.get(logoutURL).subscribe(
      data => {
        this.menuCtrl.close();
        this.rootPage = HomePage;
      },
      error => {
        this.menuCtrl.close();
        this.rootPage = HomePage;
      }
    );
    this.menuCtrl.close();
    this.rootPage = HomePage;
  }


  acchiappasogni() {
    this.menuCtrl.close();
    this.nav.setRoot(IndexPage, { tabIndex: 0});
  }

  conquista() {
    this.menuCtrl.close();
    this.nav.setRoot(IndexPage, { tabIndex: 1});
  }

  talismano() {
    this.menuCtrl.close();
    this.nav.setRoot(IndexPage, { tabIndex: 2});
  }

  profilo() {
    this.menuCtrl.close();
    this.nav.setRoot(IndexPage, { tabIndex: 3});
  }

  chibers() {
    this.menuCtrl.close();
    this.nav.setRoot(IndexPage, { tabIndex: 4});
  }



}
