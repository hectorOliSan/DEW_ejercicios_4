// Ahorcado
const rand = Math.floor(Math.random() * lista.length);
const elec = lista[rand].toUpperCase().split("").join(" ");
let teclas = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
let intentos = 0;

function crearTeclado() {
  teclas.split("").forEach((letra) => {
    document.getElementById("teclado").innerHTML +=
      "<button id='" +
      letra +
      "' onclick=" +
      "intento('" +
      letra +
      "')" +
      " class='m-1 btn btn-dark'>" +
      letra +
      "</button>";
  });
}

function fin_botones() {
  for (let i = 0; i < teclas.length; i++) {
    document.getElementById(teclas[i]).disabled = true;
  }
}

function comprobarFin() {
  let p = document.getElementById("palabra").innerText;
  let texto = document.getElementById("texto_final");
  if (p.indexOf("_") == -1) {
    texto.classList.add("text-success");
    texto.innerText =
      "Felicidades, has acertado!!\nLa palabra era: " +
      elec.replaceAll(" ", "");
    fin_botones();
    window.final.showModal();
  }

  if (intentos == 7) {
    texto.classList.add("text-danger");
    texto.innerText =
      "Game Over, has perdido!!\nLa palabra era: " + elec.replaceAll(" ", "");
    fin_botones();
    window.final.showModal();
  }
}

function intento(letra) {
  document.getElementById(letra).disabled = true;
  let p = document.getElementById("palabra");
  let new_p = p.innerText.split("");
  if (elec.indexOf(letra) != -1) {
    for (let i = 0; i < elec.length; i++) {
      if (elec[i] == letra) {
        new_p[i] = letra;
      }
    }
    p.innerText = new_p.join("");
  } else {
    intentos++;
    document.getElementById("img_ahorcado").src =
      "../images/ahorcado_" + intentos + ".svg";
    document.getElementById("historial").innerHTML +=
      "<span class='mx-1 text-decoration-line-through'>" + letra + "</span>";
  }
  comprobarFin();
}

marcas = () => {
  let p = document.getElementById("palabra");
  elec.split("").forEach((i) => {
    if (i != " ") p.innerHTML += "_";
    else p.innerHTML += " ";
  });
  // Letra al empezar
  let r = Math.floor(Math.random() * lista[rand].length);
  intento(lista[rand][r].toUpperCase());
};

function cargar_ahorcado() {
  crearTeclado();
  marcas();
}

function cerrar_final() {
  window.final.close();
}
