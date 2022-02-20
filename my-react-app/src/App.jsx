import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Stores from "./components/Stores/Stores";
import FoodCard from "./components/foodCards/foodCard";
import filterUnwantedIngridients from "../src/components/services/filterApi";

function App() {
  const [values, setValues] = useState("");
  const [resposta, setResposta] = useState();
  const [disabble, setDisabble] = useState(false);
  async function handleChange(e) {
    e.preventDefault();
    setValues(e.target.value);
    console.log("resposta", resposta);
    const response = await filterUnwantedIngridients(values);
    return setResposta(response);
  }

  return (
    <>
      <Header handleChange={handleChange} />
      {!resposta ? (
        <div className="App">
          <Menu />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      ) : (
        ""
      )}
      {resposta ? (
        <div>
          <h2 className="titulo">Recipes</h2>
          {resposta.slice(0, 10).map((el) => {
            return (
              <FoodCard
                id={el.id}
                cuisine={el.cuisine}
                ingredients={el.ingredients.join(", ")}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
}

export default App;
