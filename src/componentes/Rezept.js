import { useState } from "react"
import { Button, Collapse } from "react-bootstrap"
import { Zutatenliste } from "./Zutatenliste"
/* import { Rezeptbilder} from "./Rezeptbilder" */

export const Rezept = ({ recipe }) => {

    const [colapsed, setColapsed] = useState(true)

    const prepArray = recipe.fields.zubereitung_1.split("\n")

    return (
        <div className="col ">
            <div className="card h-100">

                <div className="hovereffect">{/* TODO hauptbild einbauen */}
                    <img src={recipe.fields.mainPic.fields.file.url} width="100%"/>
                    <div className="overlay" >
                        <a className="info" href="">{recipe.fields.rezeptName}</a>
                    </div>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{recipe.fields.rezeptName}</h5>

                    <Collapse in={!colapsed}>
                        <div id="rezeptdetails">
                            <Zutatenliste ingredients={recipe.fields.zutaten} />
                            <p className="card-text">{recipe.fields.zubereitung_1}</p>
                        </div>
                    </Collapse>
                    <Button onClick={() => setColapsed(!colapsed)} aria-controls="rezeptdetails" className="btn-rezept" >Zum
                        Rezept</Button>{/* <!--für single page als popup?--> */}

                    <Zutatenliste ingredients={recipe.fields.zutaten} />
                    <div>
                        <h4>{prepArray.splice(0, 1)}</h4>
                        {prepArray.map((step) => {
                            return (
                                <p>{step}</p>
                            )
                        })}
                    </div>
                    <button className="btn-rezept" >Zum
                        Rezept</button>{/* <!--für single page als popup?--> */}

                </div>
            </div>
        </div>)
}
/*                 <DropdownButton variant="nav-item" title="Rezepte">
                            {recipes ? recipes.map((recipe, i) => {
                                return (
                                    <>
                                        <Dropdown.Item eventKey={i}>{recipe.fields.rezeptName}</Dropdown.Item>
                                    </>
                                )
                            }) : null}
                        </DropdownButton> */