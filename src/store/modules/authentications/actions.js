// import { reject, resolve } from "core-js/fn/promise";
import Authentication from "../../../apis/Authentication";

export const userLogin = ({ commit }, { username, password }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      Authentication.login({ username, password }).then((response) => {
        commit("SET_USER", response.data);
        resolve(response);
      });
     
    }, 1000);
  });
};
