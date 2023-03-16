import { Zutatenliste } from "./Zutatenliste"
/* import { Rezeptbilder} from "./Rezeptbilder" */

export const Rezept = ({ recipe }) => {
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
                    <Zutatenliste ingredients={recipe.fields.zutaten} />
                    <p className="card-text">{recipe.fields.zubereitung_1}</p>
                    <button className="btn-rezept" >Zum
                        Rezept</button>{/* <!--für single page als popup?--> */}
                </div>
            </div>
        </div>)
}