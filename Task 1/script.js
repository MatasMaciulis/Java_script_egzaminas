/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const converterForm = document.querySelector("form");


converterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const kilos = document.getElementById("search");
  const pounds = kilosToPounds(kilos.value);
  const grams = kilosToGrams(kilos.value);
  const ounces = kilosToOunces(kilos.value);

  const output = document.getElementById("output");
  output.textContent = `Pounds: ${pounds}, Grams: ${grams}, Ounces: ${ounces}`;
  output.style.fontSize = "30px";
  output.style.textAlign = "center";
});

function kilosToPounds(kilos) {
  return kilos * 2.2046;
}

function kilosToGrams(kilos) {
  return kilos / 0.001;
}

function kilosToOunces(kilos) {
  return kilos * 35.274;
}
