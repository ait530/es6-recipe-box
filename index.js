const arrayOfIngredientsData = []

const userIngredientInput = () => {
  let userTextInput = document.getElementById('recipe-form').value
  let recipeAddButton = document.getElementById(
    'recipe-add-button')

  if (userTextInput !== '') {
    arrayOfIngredientsData.push(userTextInput)
    console.log(arrayOfIngredientsData)
    afterInput(userTextInput)
  } else if (userTextInput === '' && arrayOfIngredientsData.length > 0) {
    alert('Please input a recipe item')
  } else {
    startInstructions()
  }
}

const startInstructions = () => {
  alert('Welcome to the Recipe Box app! Please enter a recipe item to get started.')
}

const afterInput = (userTextInput) => {
  const filteredIngredientsDataArray = []
  let addedIngredient = document.getElementById('addedIngredients')
  const ingredientsData = arrayOfIngredientsData.filter(function (item, index) {
    if (arrayOfIngredientsData.indexOf(item) === index && arrayOfIngredientsData.indexOf(item) !== filteredIngredientsDataArray.slice(-1)[0] && arrayOfIngredientsData.indexOf(item) !== arrayOfIngredientsData.slice(-1)[0]) {
      filteredIngredientsDataArray.push(item)
    } else if (arrayOfIngredientsData.indexOf(item) !== index) {
      alert('Please enter a different ingredient')
    }
  })

  console.log(userTextInput)
  console.log(filteredIngredientsDataArray.length)

  let entry = document.createElement('li')
  if (userTextInput === filteredIngredientsDataArray.slice(-1)[0]) {
    entry.appendChild(document.createTextNode(filteredIngredientsDataArray.slice(-1)[0]))
      console
    addedIngredient.appendChild(entry)
    console.log(filteredIngredientsDataArray)
  } 
}

window.onload = userIngredientInput
