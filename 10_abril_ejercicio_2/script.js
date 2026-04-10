const resultado = document.getElementById("resultado");

// 1. Lista de Supermercado
function listaSupermercado() {
  let lista = ["pan", "leche", "huevos"];

  const nuevoProducto = prompt("Añade un producto:");
  lista.push(nuevoProducto);

  resultado.innerHTML = "Lista: " + lista.join(", ");
}

// 2. Tabla de Multiplicar
function tablaMultiplicar() {
  const numero = Number(prompt("Introduce un número"));

  let texto = "";

  for (let i = 1; i <= 10; i++) {
    texto += `${numero} x ${i} = ${numero * i} <br>`;
    console.log(numero * i);
  }

  resultado.innerHTML = texto;
}

// 3. Contador de Vocales (solo "a")
function contadorVocales() {
  const palabra = prompt("Introduce una palabra");
  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "a") {
      contador++;
    }
  }

  resultado.innerHTML = `La palabra tiene ${contador} letras "a"`;
}

// 4. Filtro de Mayores de Edad
//.filter() - crear nuevo array
function filtrarEdades() {
  const edades = [12, 18, 25, 10, 30];

  const mayores = edades.filter(function (edad) {
    return edad > 18;
  });

  resultado.innerHTML = "Mayores de 18: " + mayores.join(", ");
}

// 5. Conversor de Temperatura
function convertirTemperatura() {
  const celsius = Number(prompt("Introduce grados Celsius"));

  const fahrenheit = (celsius * 1.8) + 32;

  resultado.innerHTML = `${celsius}°C = ${fahrenheit}°F`;
}