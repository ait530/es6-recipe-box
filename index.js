const userIngredientInput = () => {
  let arrayOfIngredientsData = []
  let userTextInput = document.getElementById('recipe-form').value;
  let addedIngredient =document.getElementById('addedIngredients');

  if (userTextInput !== "") {
    addedIngredient.innerHTML = "The user input is: " + userTextInput;
    arrayOfIngredientsData.push(userTextInput);

    console.log(arrayOfIngredientsData);
  };
};

window.onload = userIngredientInput;
