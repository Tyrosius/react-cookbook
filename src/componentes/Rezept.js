import { useState } from "react"
import { Button, Collapse } from "react-bootstrap"
import { Zutatenliste } from "./Zutatenliste"

export const Rezept = ({ recipe }) => {

    const [colapsed, setColapsed] = useState(true)

    return (
        <div className="col ">
            <div className="card h-100">

                <div className="hovereffect">
                    <img src={recipe.main_pic} alt={recipe.rezept_name} width="100%" />
                    <div className="overlay" >
                        <a className="info" onClick={() => setColapsed(!colapsed)} aria-controls="rezeptdetails">{recipe.rezept_name}</a>
                    </div>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{recipe.rezept_name}</h5>

                    <Collapse in={!colapsed}>
                        <div id="rezeptdetails">
                            <Zutatenliste ingredients={recipe.zutaten} />
                            <div>
                                <h4>Zubereitung:</h4>
                                {recipe.zubereitung.map((step) => {
                                    return (
                                        <p>{step}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </Collapse>
                    <Button onClick={() => setColapsed(!colapsed)} aria-controls="rezeptdetails" className="btn-rezept" >Zum
                        Rezept</Button>


                </div>
            </div>
        </div>)
}