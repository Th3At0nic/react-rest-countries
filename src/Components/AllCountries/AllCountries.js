import React from "react";
import "./AllCountries.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const AllCountries = (props) => {
  const { name, flag } = props.country;

  return (
    <div className="country">
      <div className="mb-3">
        <img src={flag} alt="" />
      </div>
      <h1>{name}</h1>
      <Link to={`/detail/${name}`}>
        <button className="m-1 p-1 bg-warning">More info</button>
      </Link>
    </div>
  );
};

export default AllCountries;
