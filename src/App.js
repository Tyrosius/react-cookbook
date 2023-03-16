import { createClient } from "contentful"
import './App.css';
import { useState, useEffect } from "react";
import { Kopf } from "./componentes/Kopf";
import { Footer } from "./componentes/Footer";
import { Rezept } from "./componentes/Rezept";
import { NavBar } from "./componentes/NavBar";

function App() {
  const client = createClient({
    space: "ge9j2kgjaink",
    accessToken: "sTqTi2aDlEQqUaqMjFihRlAIBVvxdaxX8O-x74pvpPU",
  })


  const [recipes, setRecipes] = useState([])

  const getData = async () => {
    const entryItems = await client.getEntries();
    console.log("ENTRIES: ", entryItems.items);
    setRecipes(entryItems.items);

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
        {/* NavBar componente */}
        <NavBar recipes={recipes} />
        {/* Kopf componente */}
        <Kopf />
      </div >
      <div className="container-fluid">
        <div className="col-md-12 col-lg-8 mx-auto card-box">
          <h2>Die beliebtesten Rezepte im {monthArray[month]}</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {/*             <!--durch map ersetzen-->
 */}
            {
              recipes.map((recipe, i) => {
                return (<div id={recipe.sys.id} >
                  < Rezept key={recipe.sys.id} recipe={recipe} />
                </div>
                )
              })
            }
            {/* rezept componente rezeptState mitgeben */}
            {/*<!--ende durch map ersetzen-->
 */}          </div>
        </div>
      </div >
      {/* footer componente logoState mitgeben*/}
      <Footer />
    </>
  );
}

export default App;
