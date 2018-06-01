const userIngredientInput = () => {

  let arrayOfIngredientsData = []
  let userTextInput = document.getElementById('recipe-form').value;
  let addedIngredient =document.getElementById('addedIngredients');

  addedIngredient.innerHTML = "The user input is: " + userTextInput;
  arrayOfIngredientsData.push(userTextInput);

  for (let i = 0; i<10; i++) {
    console.log(arrayOfIngredientsData[i]);
  }
  console.log(arrayOfIngredientsData);
};
  


