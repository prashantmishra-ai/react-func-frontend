import React, { useState } from "react";
import Navs from "./Navs";
import axios from "axios";
import Results from "./Results";
const Wine = () => {
  const [data, setdata] = useState({
    malic_acid: "",
    ash: "",
    Alcalinity_of_ash: "",
    total_phenols: "",
    flavanoids: "",
    Nonflavanoids_phenols: "",
    proanthocyanins: "",
    color_intensity: "",
    hue: "",
    od_of_dilutedwines: "",
    proline: "",
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
      "Malic Acid": data.malic_acid,
      Ash: data.ash,
      "Alcalinity of ash": data.Alcalinity_of_ash,
      "Total phenols": data.total_phenols,
      Flavanoids: data.flavanoids,
      "Nonflavanoid phenols": data.Nonflavanoids_phenols,
      Proanthocyanins: data.proanthocyanins,
      "Color intensity": data.color_intensity,
      Hue: data.hue,
      "OD of Diluted Wines": data.od_of_dilutedwines,
      Proline: data.proline,
    };
    // console.log(json_data);

    var url =
      "https://serverless-pm.azurewebsites.net/api/wineapi?code=CdM1Hp_-PyumvH9Ej_np5s5PbipY1es_m7iypM_-f8mJAzFuYKa6LQ==";
    await axios
      .post(url, JSON.stringify(json_data))
      .then((r) => {
        // console.log(r.data);
        setresult(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(mydata);
  };

  const renderResults = () => {
    return result != null ? (
      <Results res_data={result} />
    ) : (
      <Results res_data={"No data Present"} />
    );
  };
  return (
    <div>
      <Navs />
      <h1>This is For Wine Request Data</h1>
      <form action="/wineapi">
        <label for="malic_acid">Malic Acid</label>
        <input
          type="number"
          name="malic_acid"
          step="any"
          value={data.malic_acid}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="ash">Ash</label>
        <input
          type="number"
          name="ash"
          step="any"
          value={data.ash}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="Alcalinity_of_ash">Alcalinity of Ash</label>
        <input
          type="number"
          name="Alcalinity_of_ash"
          step="any"
          value={data.Alcalinity_of_ash}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="total_phenols">Total Phenols</label>
        <input
          type="number"
          name="total_phenols"
          step="any"
          value={data.total_phenols}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="flavanoids">Flavanoids</label>
        <input
          type="number"
          name="flavanoids"
          step="any"
          value={data.flavanoids}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="Nonflavanoids_phenols">Non Flavanoids Phenols</label>
        <input
          type="number"
          name="Nonflavanoids_phenols"
          step="any"
          value={data.Nonflavanoids_phenols}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="proanthocyanins">Proanthocyanins</label>
        <input
          type="number"
          name="proanthocyanins"
          step="any"
          value={data.proanthocyanins}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="color_intensity">Color Intensity</label>
        <input
          type="number"
          name="color_intensity"
          step="any"
          value={data.color_intensity}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="hue">Hue</label>
        <input
          type="number"
          name="hue"
          step="any"
          value={data.hue}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="od_of_dilutedwines">OD of Diluted Wines</label>
        <input
          type="number"
          name="od_of_dilutedwines"
          step="any"
          value={data.od_of_dilutedwines}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label for="proline">Proline</label>
        <input
          type="number"
          name="proline"
          step="any"
          value={data.proline}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit" onClick={getResult}>Submit</button>
      </form>
      <br />
      <br />
      {renderResults()}
    </div>
  );
};

export default Wine;
