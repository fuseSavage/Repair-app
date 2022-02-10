import axios from "axios";

// register
export const sendToken = (data) => {
  return axios
    .post(
      process.env.REACT_APP_SECRET_API + "/authentication/accesstoken",
      data
    )
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

// login
export const sendLogin = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + "/authentication/login", data)
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// logout
export const sendLogout = () => {
  return localStorage.removeItem("user")
}

// get list All garage
export const FetchGarageAll = () => {
  // console.log('test55555555', process.env.REACT_APP_SECRET_API)
  return (
    axios
      .get(process.env.REACT_APP_SECRET_API + "/garage/all")
      // .get("http://localhost:4000/garage/all")
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      })
  );
};
