import axios from "axios";

export async function testCredentials(credentials) {
  const result = await axios
    .post("http://localhost:5000/api/auth", credentials)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      if (error.response) {
        alert(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
        console.log(error);
      }
      return false;
    });
  return result;
}

export async function postNewProfile(profile) {
  const result = await axios
    .post("http://localhost:5000/api/profiles/", profile)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      if (error.response) {
        alert(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
        console.log(error);
      }
      throw "Unable to create new profile...";
    });
  return result;
}

export async function putProfile(id, profile, headers) {
  const { userId, ...jwt } = headers;
  const result = await axios
    .put(`http://localhost:5000/api/profiles/${id}`, profile, { headers: jwt })
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      if (error.response) {
        alert(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
        console.log(error);
      }
    });
  return result;
}

export async function getProfileAPI(headers) {
  const { userId, ...jwt } = headers;
  return await axios
    .get(`http://localhost:5000/api/profiles/ref/${userId}`, { headers: jwt })
    .then((response) => response);
}

// export async function getGoalsAPI(headers) {
//   const { userId, ...jwt } = headers;
//   return await axios
//     .get(`http://localhost:5000/api/goals/ref/${userId}`, { headers: jwt })
//     .then((response) => response);
// }

// export async function postGoalAPI(goal) {
//   const result = await axios
//     .post("http://localhost:5000/api/goals/", goal)
//     .then((response) => response);
//   return result;
// }

// export async function generateJWT(credentials) {
//   return await axios.post("http://localhost:5000/api/auth", credentials).then((response) => {
//     localStorage.setItem("token", response.data);
//     return response;
//   });
// }

export async function postNewUser(user) {
  const result = await axios
    .post("http://localhost:5000/api/users/", user)
    .then((response) => {
      localStorage.setItem("token", response.headers["x-auth-token"]);
      return response;
    })
    .catch((error) => {
      console.log(error);
      if (error.response) {
        alert(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
        console.log(error);
      }
      return false;
    });
  return result;
}
