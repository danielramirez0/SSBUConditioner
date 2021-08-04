import axios from "axios";

export async function getTermsAPI() {
  return await axios.get(`http://localhost:5000/api/terms`).then((response) => response);
}

export async function getTechsAPI() {
  return await axios.get(`http://localhost:5000/api/techs`).then((response) => response);
}
