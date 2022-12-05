// Vectores
const VECTOR = [3, "plátanos", "5", "Héctor", "Plátanos", 4.5, 4, "hector", 2];

function ver() {
  document.getElementById("text_area").value = VECTOR.toString();
}

function ver_a(array) {
  document.getElementById("text_area").value = array.toString();
}

vector_ordenado = () => {
  let numeros = VECTOR.filter((n) => typeof n === "number").sort(
    (a, b) => a - b
  );
  let letras = VECTOR.filter((n) => typeof n === "string").sort(
    Intl.Collator().compare // Ignora mayúsculas y minúsculas
  );
  return numeros.concat(letras);
};
ordenar = () => ver_a(vector_ordenado());
reves = () => ver_a(vector_ordenado().reverse());
