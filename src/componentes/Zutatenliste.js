export const Zutatenliste = ({ ingredients }) => {
    return (<ul>
        {ingredients ? ingredients.map((ingredient, i) => {
            return (
                <li key={i}>{ingredient}</li>)
        }) : null}
    </ul>
    )
}