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
    /* rezeptdaten daten holen */
    /* zutaten holen(inkl. masseinheit) */
    /* zubereitungen holen */
    /* rezeptobjekt erstellen aus: id, name, bild von rezeptdaten + (zutatenname,menge,masseinheit aus zutaten) liste nach rezeptId + (schritt aus zubereitung) liste nach rezeptId */
    /* rezeptobjekt zu recipes hinzufügen */
    /* evtl schon in api */

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
        {/*  TODO variable anpassen? */}
        <NavBar recipes={recipes} />
        <Kopf />
      </div >
      <div className="container-fluid">
        <div className="col-md-12 col-lg-8 mx-auto card-box">
          <h2>Die beliebtesten Rezepte im {monthArray[month]}</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              /* TODO variable anpassen? */
              recipes.map((recipe, i) => {
                /* variablen anpassen */
                return (<div id={recipe.sys.id} >
                  < Rezept key={recipe.sys.id} recipe={recipe} />
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
