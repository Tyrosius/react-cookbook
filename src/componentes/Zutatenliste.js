export const Zutatenliste = ({ ingredients }) => {
    /* TODO verarbeitunganpassen? */
    return (<ul>
        {ingredients ? ingredients.map((ingredient, i) => {
            return (
                <li key={i}>{ingredient}</li>)
        }) : null}
    </ul>
    )
}