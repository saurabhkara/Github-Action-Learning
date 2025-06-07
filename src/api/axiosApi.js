import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

function getCoutryList() {
  return api.get("/all?fields=languages,capital,code,population,region,flags");
}

export { getCoutryList };

//https://restcountries.com/v3.1/all?fields=languages,capital,code,population,region,flags
