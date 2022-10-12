import axios from "axios";

// const API_URL = "https://sipel-lmd-be.herokuapp.com/api/auth/";
const API_URL = "https://sipel-lmd-be.herokuapp.com/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(fullname, surname, nip, email, role_name, username, password) {
    return axios.post(API_URL + "signup", {
      fullname,
      surname,
      nip,
      email,
      role_name,
      username,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
