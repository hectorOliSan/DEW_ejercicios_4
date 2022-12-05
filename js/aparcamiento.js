// Aparcamiento
const FECHA_ACTUAL = new Date();
const FECHA_ACTUAL_F = FECHA_ACTUAL.toJSON().slice(0, 19);

format_fecha = (fecha_f) => {
  let formato = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  let f = fecha_f.toLocaleDateString("es", formato);
  return f;
};

function cargar_fecha() {
  document.getElementById("fecha").max = FECHA_ACTUAL_F;
  document.getElementById("fecha_ac").value = format_fecha(FECHA_ACTUAL);
}

function accion_parking() {
  let aparc_ayuda = document.getElementById("aparc_ayuda");
  aparc_ayuda.innerText = "";
  let fecha = document.getElementById("fecha").value;
  if (fecha == "") {
    aparc_ayuda.innerText = "> Debes escribir una fecha y hora válidas";
    borrar_ayuda(aparc_ayuda);
    return;
  }
  f_entrada = new Date(fecha);
  let tiempo = FECHA_ACTUAL - f_entrada;
  if (tiempo <= 60000) {
    aparc_ayuda.innerText =
      "> La fecha y hora de Entrada debe ser < a la de Salida";
    borrar_ayuda(aparc_ayuda);
    return;
  }
  calcular_precio(tiempo);
}

function calcular_precio(tiempo) {
  let dias = Math.floor(tiempo / (24 * 3600 * 1000));
  let horas = Math.floor((tiempo / (3600 * 1000)) % 24);
  let min = Math.floor((tiempo / (60 * 1000)) % 60);
  let t_transcurrido = dias == 0 ? "" : dias + " día/s, ";
  t_transcurrido += horas + " hora/s y " + min + " minutos";
  document.getElementById("t_transcurrido").innerText = t_transcurrido;
  p_dias = 20 * dias;
  p_horas = 1.2;
  if (horas == 1 && min > 0) p_horas += 1.5;
  if (horas > 1) {
    p_horas += 1.5 * (horas - 1);
    if (min > 0) p_horas += 1.5;
  }
  p_horas_max = p_horas > 20 ? 20 : p_horas;
  p_total = p_dias + p_horas_max;
  document.getElementById("precio").value = p_total + " €";
}
