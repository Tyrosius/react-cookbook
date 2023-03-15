import { useState } from "react"
import { Button, Collapse } from "react-bootstrap"
import { Zutatenliste } from "./Zutatenliste"
export const Rezept = ({ recipe }) => {
    const [colapsed, setColapsed] = useState(true)
    return (
        <div className="col ">
            <div className="card h-100">

                <div className="hovereffect">{/* TODO hauptbild einbauen */}
                    <img src="img/kohlsuppe-aus-portugal-mit-chorizo-49365.jpg" className="card-img-top img-responsive" alt="..." />
                    <div className="overlay" >
                        <a className="info" href="">Kohlsuppe</a>
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