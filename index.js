const arrayOfIngredientsData = [];

const userIngredientInput = () => {
  let userTextInput = document.getElementById('recipe-form').value;
  let recipeAddButton = document.getElementById(
    'recipe-add-button'); 

  if (userTextInput !== '') {
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
    const filteredIngredientsDataArray = [];
    let addedIngredient = document.getElementById('addedIngredients');
    const ingredientsData = arrayOfIngredientsData.filter(function(item, index) {
      
      if (arrayOfIngredientsData.indexOf(item) == index){
        filteredIngredientsDataArray.push(item);

        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(item)); 
        addedIngredient.appendChild(entry);
       
      }
      else if (arrayOfIngredientsData.indexOf(item) !== index) {
        return;
        alert('Please enter a different ingredient');;
      }
    });
    console.log(filteredIngredientsDataArray);
};

window.onload = userIngredientInput;
