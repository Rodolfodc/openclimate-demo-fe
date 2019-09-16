import Storage from "./Storage";
import * as axios from "axios";
import { from } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { sha3_512 } from "js-sha3";
const qs = require("querystring");

export class Http {
  static userValidate(username, password) {
    const hash = sha3_512(password);

    return this.post("login", {
      username: username,
      pwhash: hash
    }).pipe(
      map(value => {
        const entity = value.data && value.data ? value.data : null;
        Storage.set("token", entity.Token);
        return value;
      })
    );
  }

  static getNationStates() {
    return this.post("nation-states", ).pipe(
      map(value => {
        return value;
      })
    );
  }

  static getMultinationals() {
    return this.post("multinationals", ).pipe(
      map(value => {
        return value;
      })
    );
  }

  static get(path, data) {
    return from(
      axios({
        method: "GET",
        url: `https://api.openclimate.earth/${path}`,
        params: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    );
  }

  static post(path, data) {
    return from(
      axios({
        method: "POST",
        url: `https://api.openclimate.earth/${path}`,
        data: qs.stringify(data),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    );
  }
}