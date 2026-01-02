import { useState, useRef, useEffect } from 'react'
import Recipe from './Recipe'
import IngredientList from './IngredientList'

function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipeShown, setRecipeShown] = useState(false)
  const recipeSection = useRef(null)

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient')
    if (newIngredient) {
      if (ingredients.includes(newIngredient)) return
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
  }

  function showRecipe() {
    setRecipeShown(prev => !prev)
  }

  useEffect(
    () => {
      if (recipeShown){
        recipeSection.current.scrollIntoView({behavior:"smooth"});
      }
    },
    [recipeShown]
  )

  return (
    <>
      <section className="section-add-ingredient">
        <form action={addIngredient}>
          <input type="text" name="ingredient" placeholder="Exemplo: Orégano" aria-label="Adicione um ingrediente"/>
          <button>Adicione um ingrediente</button>
        </form>
      </section>
      <IngredientList showRecipe={showRecipe} ingredients={ingredients}/>
      <Recipe recipeShown={recipeShown} ref={recipeSection}/>
    </>
  )
}

export default Main
