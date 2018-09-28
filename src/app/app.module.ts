import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { MyApp } from "./app.component";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthProvider } from "../providers/auth/auth";
import { PdfProvider } from '../providers/pdf/pdf';

export const firebaseConfig = {
  apiKey: "AIzaSyBc9-2eyfXopxEDBj0gY6YfB9bmTVjvJmM",
  authDomain: "venus-warriors-4981c.firebaseapp.com",
  databaseURL: "https://venus-warriors-4981c.firebaseio.com",
  projectId: "venus-warriors-4981c",
  storageBucket: "venus-warriors-4981c.appspot.com",
  messagingSenderId: "940936728675"
};

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    PdfProvider
    //{ provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppModule {}
