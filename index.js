const userIngredientInput = () => {
  let arrayOfIngredientsData = [];
  let userTextInput = document.getElementById('recipe-form').value;
  let recipeAddButton = document.getElementById(
    'recipe-add-button');
  let addedIngredient = document.getElementById('addedIngredients');

  if (userTextInput !== "") {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(userTextInput));
    addedIngredient.appendChild(entry);
  
    arrayOfIngredientsData.push(userTextInput);
    console.log(arrayOfIngredientsData);
  }
  else if (userTextInput === "" && arrayOfIngredientsData.length === 0) {
    alert('Please enter a recipe item');
  }
};

window.onload = userIngredientInput;
