let premierNombre = document.getElementById("number1");
let deuxiemeNombre = document.getElementById("number2");
let add = document.getElementById("add");
let substract = document.getElementById("substract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let resultFinal = document.getElementById("resultfinal");

function operationAdd() {
  let result = Number(premierNombre.value) + Number(deuxiemeNombre.value);
  resultFinal.textContent = result;
}
function operationSubstract() {
  let result = Number(premierNombre.value) - Number(deuxiemeNombre.value);
  resultFinal.textContent = result;
}
function operationMultiply() {
  let result = Number(premierNombre.value) * Number(deuxiemeNombre.value);
  resultFinal.textContent = result;
}
function operationDivide() {
  // Convertir les valeurs en nombres
  let val1 = Number(premierNombre.value);
  let val2 = Number(deuxiemeNombre.value);

  // Vérifier si l'une des valeurs est zéro
  if (val1 === 0 || val2 === 0) {
    resultFinal.textContent = "Ce calcul est impossible";
  } else {
    let result = val1 / val2;
    resultFinal.textContent = result;
  }
}

add.addEventListener("click", operationAdd);
substract.addEventListener("click", operationSubstract);
multiply.addEventListener("click", operationMultiply);
divide.addEventListener("click", operationDivide);
