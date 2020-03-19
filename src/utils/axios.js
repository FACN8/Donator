import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response;
};

export const getRequest = (path, token) => {
  return axios
    .get(API_BASE + path, {
      headers: { Authorization: token ? token : "no accesses" }
    })
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getRequest failed ${err}`);
    });
};
export const postRequest = (path, body,token) => {
  return axios
    .post(API_BASE + path, body, {
        headers: { Authorization: token ? token : "no accesses" }
      })
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch postRequest failed ${err}`);
    });
};
