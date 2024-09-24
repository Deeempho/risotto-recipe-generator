function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: [
      "Bring stock to a simmer in a large saucepan. Keep warm over low heat. Heat oil in a Dutch over over medium heat, then add onion.Add arborio rice and salt, then cook for 1 minute.Add 1/2 cup stock and cook until absorbed, stirring frequently.Stir in 1 1/2 cups stock; cook 4 minutes or until liquid is nearly absorbed, stirring constantly.Add remaining stock, 3/4 cup at a time, stirring nearly constantly until each portion is absorbed before adding the next. Remove risotto from the heat, then add in remaining stock, butter, pepper, and cheese.",
    ],
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
