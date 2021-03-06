import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { DatipersonaliPage } from '../pages/datipersonali/datipersonali';
import { AvatarPage } from '../pages/avatar/avatar';
import { ProvinciaPage } from '../pages/provincia/provincia';
import { LoginPage } from '../pages/login/login';
import { IndexPage } from '../pages/index/index';
import { TalismanoPage } from '../pages/talismano/talismano';
import { AcchiappasogniPage } from '../pages/acchiappasogni/acchiappasogni';
import { ConquistaPage } from '../pages/conquista/conquista';
import { ProfiloPage } from '../pages/profilo/profilo';
import { AmiciPage } from '../pages/amici/amici';
import { PartnerPage } from '../pages/partner/partner';
import { AggiungiAmicoPage } from '../pages/aggiungi-amico/aggiungi-amico';
import { TribuSceltaPage } from '../pages/tribuscelta/tribuscelta';
import { AquilePage } from '../pages/aquile/aquile';
import { PumaPage } from '../pages/puma/puma';
import { VolpiPage } from '../pages/volpi/volpi';
import { OrsiPage } from '../pages/orsi/orsi';
import { LupiPage } from '../pages/lupi/lupi';
import { ConfermaTribuPage } from '../pages/confermatribu/confermatribu';
import { ModificaProfiloPage } from '../pages/modificaprofilo/modificaprofilo'
import { DesideriPage } from '../pages/desideri/desideri';
import { DesiderioPage } from '../pages/desiderio/desiderio';
import { AmicoPage } from '../pages/amico/amico';
import { GruppoPage } from '../pages/gruppo/gruppo';
import { UtentiGruppoPage } from '../pages/utenti-gruppo/utenti-gruppo';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { DatiFbPage } from '../pages/dati-fb/dati-fb';
import { InvitaAmicoPage } from '../pages/invita-amico/invita-amico';
import { ModificavatarPage } from '../pages/modificavatar/modificavatar';
import { NontroviPage } from '../pages/nontrovi/nontrovi';
import { ModalePage } from '../pages/modale/modale';

import { AuthService } from '../providers/auth-service/auth-service';
import { URLVars } from '../providers/urls-var';
import { PointReplacerPipe } from '../pipes/point-replacer.pipe';

import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';
import { FileTransfer } from '@ionic-native/file-transfer';
import { QRCodeModule } from 'angular2-qrcode';
import { Geolocation } from '@ionic-native/geolocation';
import { Push } from '@ionic-native/push';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Brightness } from '@ionic-native/brightness';
import { Diagnostic } from '@ionic-native/diagnostic';
import { IonicStorageModule } from '@ionic/storage';

import { SuperTabsModule } from 'ionic2-super-tabs';

import { Http } from '@angular/http';
import { ExtendedHttpService } from '../providers/extended-http.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrazionePage,
    LoginPage,
    DatipersonaliPage,
    AvatarPage,
    ProvinciaPage,
    IndexPage,
    TalismanoPage,
    AcchiappasogniPage,
    ConquistaPage,
    ProfiloPage,
    AmiciPage,
    PartnerPage,
    AggiungiAmicoPage,
    TribuSceltaPage,
    AquilePage,
    PumaPage,
    VolpiPage,
    OrsiPage,
    LupiPage,
    ConfermaTribuPage,
    ModificaProfiloPage,
    DesideriPage,
    DesiderioPage,
    AmicoPage,
    GruppoPage,
    UtentiGruppoPage,
    ForgotPasswordPage,
    TutorialPage,
    DatiFbPage,
    InvitaAmicoPage,
    ModificavatarPage,
    NontroviPage,
    PointReplacerPipe,
    ModalePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {
        mode: 'md'
      }
    ),
    HttpModule,
    QRCodeModule,
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrazionePage,
    LoginPage,
    DatipersonaliPage,
    AvatarPage,
    ProvinciaPage,
    IndexPage,
    TalismanoPage,
    AcchiappasogniPage,
    ConquistaPage,
    ProfiloPage,
    AmiciPage,
    PartnerPage,
    AggiungiAmicoPage,
    TribuSceltaPage,
    AquilePage,
    PumaPage,
    VolpiPage,
    OrsiPage,
    LupiPage,
    ConfermaTribuPage,
    ModificaProfiloPage,
    DesideriPage,
    DesiderioPage,
    AmicoPage,
    GruppoPage,
    UtentiGruppoPage,
    ForgotPasswordPage,
    TutorialPage,
    DatiFbPage,
    InvitaAmicoPage,
    ModificavatarPage,
    NontroviPage,
    ModalePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    URLVars,
    Camera,
    Crop,
    FileTransfer,
    Geolocation,
    Push,
    Facebook,
    GooglePlus,
    SocialSharing,
    Brightness,
    PointReplacerPipe,
    Diagnostic,
    {provide: Http, useClass: ExtendedHttpService },
  ]
})
export class AppModule {}
