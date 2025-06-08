import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

function getCoutryList() {
  return api.get(
    "/all?fields=languages,capital,code,population,region,flags,name"
  );
}

function getCountryDetail(country) {
  return api.get(
    `/name/${country}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
}
export { getCoutryList, getCountryDetail };

//https://restcountries.com/v3.1/all?fields=languages,capital,code,population,region,flags
