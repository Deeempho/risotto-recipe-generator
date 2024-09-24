function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "21dbt88fo9e3fd05aafa4a622bab45f2";
  let prompt = `User instructions are: Generate a recipe on ${instructionsInput.value}`;
  let context =
    "You are a great cook and an expert when it comes to food. Your mission is to generate a simple and easy to read recipe. The poem must be in basic HTML format. Separate lines with a <br />. Make sure to follow user instructions. Sign the poem with 'SheCodes AI' inside a <strong> at the end of the poem and NOT at the beginning of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⌛ Generating a recipe about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
