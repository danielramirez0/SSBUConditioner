import axios from "axios";

export async function fetchCharacters() {
  return await axios.get("http://localhost:5000/api/characters").then((response) => {
    return response;
  });
}
