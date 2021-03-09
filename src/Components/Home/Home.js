import React, { useEffect, useState } from "react";
import AllCountries from "../AllCountries/AllCountries";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <div className="col-4">
        {countries.map((country) => (
          <AllCountries country={country}></AllCountries>
        ))}
      </div>
    </div>
  );
};

export default Home;
