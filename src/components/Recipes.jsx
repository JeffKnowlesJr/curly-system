const curlySystem = {
  foo: 1,
  bar: 0
}

const spreadSystem = {
  ...curlySystem,
  next: 2
}

console.log(curlySystem)
console.log(spreadSystem)

import { useState } from 'react'

const Recipes = () => {
  const [recipe, setRecipe] = useState({})

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(curlySystem)}>Curly System</button>
      <button onClick={() => setRecipe(spreadSystem)}>Spread System</button>

      <ul>
        {Object.keys(recipe).map((essence) => (
          <li key={essence}>
            {essence}: {recipe[essence]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes
