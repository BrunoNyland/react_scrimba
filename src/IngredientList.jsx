export default function IngredientList(props){
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function displayIngredientsList() {
        if (props.ingredients.length < 1) {
        return <h2>Adicione ingredientes à sua lista para poder solicitar uma receita</h2>
        }
        else {
        return (
            <>
            <h2>Ingredientes disponíveis:</h2>
            <ul>
                {ingredientsListItems}
            </ul>
            { (props.ingredients.length > 3) &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Pronto para cozinhar?</h3>
                        <p>Receba uma receita com os ingredientes listados acima.</p>
                    </div>
                    <button onClick={props.showRecipe}>Quero a Receita</button>
                </div>
            }
            </>
        )
        }
    }

    return <section className='section-ingredient-list'>
        {displayIngredientsList()}
    </section>
}