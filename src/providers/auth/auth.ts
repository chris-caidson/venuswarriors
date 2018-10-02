import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { firebaseConfig } from "../../app/app.module";

@Injectable()
export class AuthProvider {
  private localStorageKey: string = "venusWarriorsLoggedIn";
  private localAdminStorageKey: string = "venusWarriorsAdminLoggedIn";

  incorrectPassword: boolean = false;
  incorrectAdminPassword: boolean = false;
  previousPage: string = "HomePage";
  loggedIn: boolean = localStorage.getItem(this.localStorageKey) != null;
  loggedInAsAdmin: boolean =
    localStorage.getItem(this.localAdminStorageKey) != null;
  count: number = 0;

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  public login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.loggedIn = true;
        this.incorrectPassword = false;
        localStorage.setItem(this.localStorageKey, email);
      })
      .catch(() => {
        this.loggedIn = false;
        this.incorrectPassword = true;
      });
  }

  public loginAsAdmin(password: string) {
    firebase
    .auth()
    .signInWithEmailAndPassword("admin_user@venuswarriors.com", password)
    .then(() => {
      this.loggedInAsAdmin = true;
      this.incorrectAdminPassword = false;
      localStorage.setItem(this.localAdminStorageKey, "true");
    })
    .catch(() => {
      this.loggedInAsAdmin = false;
      this.incorrectAdminPassword = true;
    });
  }

  public logout() {
    try {
      firebase.auth().signOut();
      this.loggedIn = false;
      localStorage.removeItem(this.localStorageKey);
    } catch {
      // Ignore errors.
    }
  }

  public logoutAsAdmin() {
    try {
      firebase.auth().signOut();
      this.loggedInAsAdmin = false;
      localStorage.removeItem(this.localAdminStorageKey);
    } catch {
      // Ignore errors.
    }
  }
}
