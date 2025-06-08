import React, { useEffect, useState, useTransition } from "react";
import { getCoutryList } from "../api/axiosApi";
import Loader from "../components/Loader";
import CountryCard from "../components/CountryCard";

export default function Country() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

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

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {data.map((item, index) => {
          return <CountryCard item={item} key={index} />;
        })}
      </ul>
    </section>
  );
}
