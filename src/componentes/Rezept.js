import { Zutatenliste } from "./Zutatenliste"
export const Rezept = ({ recipe }) => {
    const prepArray = recipe.fields.zubereitung_1.split("\n")
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