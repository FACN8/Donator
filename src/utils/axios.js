import axios from "axios";
const API_BASE = "http://localhost:5000/api";

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response;
};

export const getRequest = path => {
  return axios
    .get(API_BASE + path)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};
export const postRequest = (path, body) => {
  return axios
    .post(API_BASE + path, body, {
      headers: { "Access-Control-Allow-Origin": "*" }
    })
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};
