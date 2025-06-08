import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../api/axiosApi";
import Loader from "./Loader";

export default function CountryDetails() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryDetail(params.id);
      console.log("countryDetailU", res);
      setData(res.data);
    });
  }, []);
  if (isPending) {
    return <Loader />;
  }
  return <div>CountryDetails</div>;
}
