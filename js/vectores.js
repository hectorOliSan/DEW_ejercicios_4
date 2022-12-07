// Vectores
let VECTOR = [];

function validar_vec() {
  const reg = /((\w)+(,)*)+/;
  let vector_ayuda = document.getElementById("vector_ayuda");
  let vector = document.getElementById("vector").value;
  if (vector == "") {
    vector_ayuda.innerText = "> Debes escribir una lista de palabras";
    borrar_ayuda(vector_ayuda);
    return;
  }
  let v = vector.split(" ").join("");
  if (reg.exec(v) !== null) {
    VECTOR = v.split(",").filter(e => e != "");
    return true;
  } else {
    vector_ayuda.innerText =
      "> Las palabras deben estar separada por coma( , )";
    borrar_ayuda(vector_ayuda);
    return false;
  }
}

function ver() {
  if (validar_vec())
    document.getElementById("text_area").value = VECTOR.toString();
}

function ver_a() {
  document.getElementById("text_area").value = VECTOR.toString();
}

function vector_ordenado() {
  if (validar_vec()) {
    let numeros = VECTOR.filter((n) => typeof n === "number").sort(
      (a, b) => a - b
    );
    let letras = VECTOR.filter((n) => typeof n === "string").sort(
      Intl.Collator().compare // Ignora mayúsculas y minúsculas
    );
    return numeros.concat(letras);
  }
}
function ordenar() {
  VECTOR = vector_ordenado();
  ver_a();
}
function reves() {
  VECTOR = vector_ordenado().reverse();
  ver_a();
}
