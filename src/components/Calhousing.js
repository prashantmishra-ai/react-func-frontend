import axios from "axios";
import React, { useState } from "react";
import Navs from "./Navs";
import Results from "./Results";
const Calhousing = () => {
  const url =
    "https://serverless-pm.azurewebsites.net/api/HttpTrigger1?code=KXV9xfGhArPhjc75xyJ-PA2VdSGgunTPuyI6HdoEgs2nAzFuh7qheA==";
  const [data, setdata] = useState({
    longitude: "",
    latitude: "",
    housing_median_age: "",
    total_rooms: "",
    total_bedrooms: "",
    population: "",
    households: "",
    median_income: "",
  });

  const [result, setresult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const getResult = async (e) => {
    e.preventDefault();
    const json_data = {
      longitude: data.longitude,
      latitude: data.latitude,
      housing_median_age: data.housing_median_age,
      total_rooms: data.total_rooms,
      total_bedrooms: data.total_bedrooms,
      population: data.population,
      households: data.households,
      median_income: data.median_income,
    };
    await axios
      .post(url, JSON.stringify(json_data))
      .then((r) => {
        // console.log(r.data);
        setresult(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderResults = () => {
    return result != null ? (
      <Results res_data={result} />
    ) : (
      <Results res_data={"No data Present"} />
    );
  };

  return (
    <>
      <Navs />
      <h1>This is for Calhousing Request</h1>
      <form action="/calhousing">
        <label for="longitude">Enter Longitude : </label>
        <input
          type="number"
          name="longitude"
          step="any"
          value={data.longitude}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="latitude">Enter Latitude : </label>
        <input
          type="number"
          name="latitude"
          step="any"
          value={data.latitude}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="housing_median_age">Enter Housing Median Age : </label>
        <input
          type="number"
          name="housing_median_age"
          step="any"
          value={data.housing_median_age}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="total_rooms">Enter Total No. of Rooms : </label>
        <input
          type="number"
          name="total_rooms"
          step="any"
          value={data.total_rooms}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="total_bedrooms">Enter Total no. of Bedrooms : </label>
        <input
          type="number"
          name="total_bedrooms"
          step="any"
          value={data.total_bedrooms}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="population">Enter Population : </label>
        <input
          type="number"
          name="population"
          step="any"
          value={data.population}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="households">Enter Households : </label>
        <input
          type="number"
          name="households"
          step="any"
          value={data.households}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="median_income">Enter Median Income : </label>
        <input
          type="number"
          name="median_income"
          step="any"
          value={data.median_income}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <br />
        <br />
        <button type="submit" onClick={getResult}>Submit Data</button>
      </form>
      <br />
      <br />
      {renderResults()}
    </>
  );
};

export default Calhousing;
