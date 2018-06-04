const arrayOfIngredientsData = ['Chicken', 'Noodles', 'Broccoli'];
const ingredientsData = [];

const userIngredientInput = () => {
  let userTextInput = document.getElementById('recipe-form').value;
  let recipeAddButton = document.getElementById(
    'recipe-add-button');
  let addedIngredient = document.getElementById('addedIngredients');

  if (userTextInput !== '') {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(userTextInput));
    addedIngredient.appendChild(entry);
  
    arrayOfIngredientsData.push(userTextInput);
    console.log(arrayOfIngredientsData);

    afterInput(userTextInput);
  }
  else if (userTextInput === '' && arrayOfIngredientsData.length > 3) {
    alert('Please input a recipe item');
  }
  else  {
    startInstructions();
  }
};

const startInstructions = () => {
  alert('Welcome to the Recipe Box app! Please enter a recipe item to get started.');
};

const afterInput = (userTextInput) => {
    console.log(arrayOfIngredientsData.length);
    const ingredientsData = arrayOfIngredientsData.filter(function(item, index) {
      if (arrayOfIngredientsData.indexOf(item) == index)
        return item;
    });
    console.log('Filtered Array: ' + ingredientsData);
};

window.onload = userIngredientInput;
