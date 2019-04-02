import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  token: string;

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    return firebase.auth().currentUser.getIdToken();
  }

  isAuthenticated() {
    return this.token != null;
  }
}
