import axios from "axios";

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

export const sendLogin = (data) => {
    return axios
      .post(
        process.env.REACT_APP_SECRET_API + "/authentication/login",
        data
      )
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  };
