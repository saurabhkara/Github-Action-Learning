import React, { useEffect, useState, useTransition } from "react";
import { getCoutryList } from "../api/axiosApi";
import Loader from "../components/Loader";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";

export default function Country() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCoutryList();
      console.log(res);
      setData(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  const filterCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === "all") {
      return true;
    }
    return country.region === filter;
  };

  const filteredCountry = data.filter(
    (country) => filterCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={data}
        setCountries={setData}
      />
      <ul className="grid grid-four-cols">
        {filteredCountry.map((item, index) => {
          return <CountryCard item={item} key={index} />;
        })}
      </ul>
    </section>
  );
}
