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
  return localStorage.removeItem("user");
};

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

// Fetch Thai Address API
export const FetchThaiAddress = () => {
  return axios
    .get("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces")
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

// get Thai Address API
export const FetchMemberTel = () => {
  return axios
    .get(process.env.REACT_APP_SECRET_API + "/member/all")
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

// send data to InsertDetails
export const InsertDetails = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + "/repairdetail/insert", data)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

// get data FetctDetailByGarage
export const FetctDetailByGarage = (data) => {
  // console.log('fetdata', data)
  return (
    axios
      // .get(process.env.REACT_APP_SECRET_API + "/repairdetail/getbygarage", data)
      .get(process.env.REACT_APP_SECRET_API + "/repairdetail/getbygarage", {
        params: data,
      })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      })
  );
};

// get data FetctDetailByGarageID
export const FetctDetailByGarageID = (data) => {
  // console.log('fetdata', data)
  return (
    axios
      // .get(process.env.REACT_APP_SECRET_API + "/repairdetail/getbygarage", data)
      .get(process.env.REACT_APP_SECRET_API + "/repairdetail/getbydetailID", {
        params: data,
      })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      })
  );
};
