import Authentication from "../../../apis/Authentication";

export const userLogin = async ({ commit }, { username, password }) => {

  Authentication.login({ username, password }).then((response) => {
    commit("SET_USER", response.data);
    if (response.status==200 && response.data.length > 0) {
      try {
        localStorage.setItem("user", JSON.stringify(response.data[0]));
        // this.$router.push("/");
      } catch (e) {
        console(e);
      }
    }
  });
};
