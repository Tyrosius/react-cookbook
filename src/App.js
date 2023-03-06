import { createClient } from "contentful"
import './App.css';
import { useState, useEffect } from "react";
import { Kopf } from "./componentes/Kopf";
import { Footer } from "./componentes/Footer";

function App() {
  const client = createClient({
    space: "ge9j2kgjaink",
    accessToken: "sTqTi2aDlEQqUaqMjFihRlAIBVvxdaxX8O-x74pvpPU",
  })

  const getData = async () => {
    const entryItems = await client.getEntries();
    console.log("ENTRIES: ", entryItems.items[0].fields.logo.fields.file.url);
    //setRecipes(entryItems.items[1]);
    //setLogos(entryItems.items[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="container-fluid">
        {/* NavBar componente */}

        {/* Kopf componente */}
        <Kopf />
      </div >
      <div class="container-fluid">
        <div class="col-md-12 col-lg-8 mx-auto card-box">
          <h2>Die beliebtesten Rezepte im Februar</h2>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {/*             <!--durch map ersetzen-->
 */}
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
