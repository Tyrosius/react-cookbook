import { createClient } from "contentful"
import './App.css';
import { useState, useEffect } from "react";
import { Kopf } from "./componentes/Kopf";
import { Footer } from "./componentes/Footer";
import { Rezept } from "./componentes/Rezept";
import { NavBar } from "./componentes/NavBar";

function App() {

  const [recipes, setRecipes] = useState([])

  const getData = async () => {
    try {/* TODO errorhandling */
      const entryItems = await fetch('https://naschbar-api.onrender.com/rezepte');
      const data = await entryItems.json();

      setRecipes(data.data);
    } catch (e) { console.log(e) }


  };

  useEffect(() => {
    getData();
  }, []);
  const monthArray = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ]
  const month = new Date().getMonth()

  return (
    <>
      <div className="container-fluid">
        <NavBar recipes={recipes} />
        <Kopf />
      </div >
      <div className="container-fluid">
        <div className="col-md-12 col-lg-8 mx-auto card-box">
          <h2>Die beliebtesten Rezepte im {monthArray[month]}</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              recipes.map((recipe, i) => {
                return (<div id={recipe.id} >
                  < Rezept key={recipe.id} recipe={recipe} />
                </div>
                )
              })
            }
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
}

export default App;
