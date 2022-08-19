import React, { useState } from "react";
// import { getirisdata } from "./getapidata";
import Navs from "./Navs";
import axios from "axios";
import Results from "./Results";
const Iris = () => {
  const [data, setdata] = useState({
    sepal_length: "",
    sepal_width: "",
    petal_length: "",
    petal_width: "",
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
      sepal_length: data.sepal_length,
      sepal_width: data.sepal_width,
      petal_length: data.petal_length,
      petal_width: data.petal_width,
    };
    // console.log(json_data);

    var url = "https://serverless-pm.azurewebsites.net/api/iris?code=B8ZTHUL3FtS0VAA5YomnInPYLN0aRcheXYf96pD3tY0PAzFuKKjv8Q==";
    await axios
      .post(url, JSON.stringify(json_data))
      .then((r) => {
        // console.log(r.data);
        setresult(r.data)
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(mydata);
  };

  const renderResults = () => {
    return(result != null ? <Results res_data={result}/> : <Results res_data={"No data Present"}/>)
  };
  return (
    <div>
      <Navs />
      <h1>This is for IRIS Page</h1>
      <form>
        <label htmlFor="sepal_length">Sepal Length</label>
        <input
          type="number"
          name="sepal_length"
          step="any"
          value={data.sepal_length}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="sepal_width">Sepal Width</label>
        <input
          type="number"
          name="sepal_width"
          step="any"
          value={data.sepal_width}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        <label htmlFor="petal_length">Petal Length</label>
        <input
          type="number"
          name="petal_length"
          step="any"
          value={data.petal_length}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="petal_width">Petal Width</label>
        <input
          type="number"
          name="petal_width"
          step="any"
          value={data.petal_width}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        <button type="submit" onClick={getResult}>
          Submit
        </button>
      </form>
      {renderResults()}
    </div>
  );
};

export default Iris;
