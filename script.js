function Calcular() {
  var valorElemento = document.getElementById("valor");
  var valorDistancia = parseFloat(valorElemento.value);
  var horas = valorDistancia / 1079252848;
  var minutos = horas * 60;
  var segundos = minutos * 60;
  var elementoValorHoras = document.getElementById("valorConvertido");
  if (minutos > 59.99) {
    var valorConvertido = horas.toFixed(2) + " horas para chegar lá!";
    elementoValorHoras.innerHTML = valorConvertido;
  } else if (segundos > 59.99) {
    var valorConvertido = minutos.toFixed(2) + " minutos para chegar lá!";
    elementoValorHoras.innerHTML = valorConvertido;
  } else {
    var valorConvertido = segundos.toFixed(2) + " segundos para chegar lá!";
    elementoValorHoras.innerHTML = valorConvertido;
  }
}
