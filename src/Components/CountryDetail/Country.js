import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Country = () => {
  let { countryName } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    let url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  let { name, capital, flag, area, population, region } = country;
    // console.log(country[0].name);
  return (
    <div className="mt-5 country">
      <div className="mb-3">
        <img src={flag} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>Capital: {capital}</h2>
        <h5>Region: {region}</h5>
        <h5>Area: {area}</h5>
        <h5>Population: {population}</h5>
      </div>
    </div>
  );
};

export default Country;
