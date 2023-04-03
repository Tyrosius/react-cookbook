import { useState } from "react"
import { Button, Collapse } from "react-bootstrap"
import { Zutatenliste } from "./Zutatenliste"
/* import { Rezeptbilder} from "./Rezeptbilder" */

export const Rezept = ({ recipe }) => {

    const [colapsed, setColapsed] = useState(true)
    /* TODO zubereitungsverarbeitung anpassen */
    const prepArray = recipe.fields.zubereitung_1.split("\n")

    return (
        <div className="col ">
            <div className="card h-100">

                <div className="hovereffect">
                    {/* TODO variable anpassen */}
                    <img src={recipe.fields.mainPic.fields.file.url} width="100%" />
                    <div className="overlay" >
                        <a className="info" onClick={() => setColapsed(!colapsed)} aria-controls="rezeptdetails">{recipe.fields.rezeptName}</a>
                    </div>
                </div>

                <div className="card-body">
                    {/* TODO variable anpassen */}
                    <h5 className="card-title">{recipe.fields.rezeptName}</h5>

                    <Collapse in={!colapsed}>
                        <div id="rezeptdetails">
                            {/* TODO variable anpassen */}
                            <Zutatenliste ingredients={recipe.fields.zutaten} />
                            <div>
                                {/*  TODO zubereitungsverarbeitung anpassen  */}
                                <h4>{prepArray.splice(0, 1)}</h4>
                                {prepArray.map((step) => {
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