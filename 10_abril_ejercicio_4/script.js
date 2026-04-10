const resultado = document.getElementById("resultado");

// 1. Sistema de Biblioteca
class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }
}

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  tomarPrestado(libro) {
    if (libro.disponible) {
      libro.disponible = false;
      return `${this.nombre} tomó prestado el libro "${libro.titulo}".`;
    } else {
      return `El libro "${libro.titulo}" no está disponible.`;
    }
  }
}

function sistemaBiblioteca() {
  const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");
  const usuario1 = new Usuario("Melina");

  const mensaje1 = usuario1.tomarPrestado(libro1);
  const mensaje2 = usuario1.tomarPrestado(libro1);

  resultado.innerHTML = `
    <h3>Sistema de Biblioteca</h3>
    <p>${mensaje1}</p>
    <p>${mensaje2}</p>
    <p><strong>Disponible:</strong> ${libro1.disponible}</p>
  `;
}

// 2. Adivina el Número 
function adivinaNumeroPro() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let intentos = 5;
  let acertado = false;
  let texto = "<h3>Adivina el Número</h3>";

  while (intentos > 0 && !acertado) {
    const intento = Number(prompt(`Adivina el número del 1 al 100. Te quedan ${intentos} intentos:`));

    if (intento === numeroSecreto) {
      texto += `<p>Correcto. El número era ${numeroSecreto}.</p>`;
      acertado = true;
    } else if (intento < numeroSecreto) {
      texto += `<p>${intento}: Más alto</p>`;
    } else {
      texto += `<p>${intento}: Más bajo</p>`;
    }

    intentos--;
  }

  if (!acertado) {
    texto += `<p>Se acabaron los intentos. El número era ${numeroSecreto}.</p>`;
  }

  resultado.innerHTML = texto;
}

// 3. Buscador de Palíndromos
function esPalindromo(frase) {
  const textoLimpio = frase.toLowerCase().replaceAll(" ", "");
  const textoInvertido = textoLimpio.split("").reverse().join("");

  return textoLimpio === textoInvertido;
}

function buscarPalindromo() {
  const frase = prompt("Introduce una frase:");
  const respuesta = esPalindromo(frase);

  resultado.innerHTML = `
    <h3>Buscador de Palíndromos</h3>
    <p><strong>Frase:</strong> ${frase}</p>
    <p><strong>Resultado:</strong> ${respuesta ? "Sí es un palíndromo" : "No es un palíndromo"}</p>
  `;
}

// 4. Simulador de Cajero Automático
function calcularBilletes(monto) {
  let billetes50 = Math.floor(monto / 50);
  monto = monto % 50;

  let billetes20 = Math.floor(monto / 20);
  monto = monto % 20;

  let billetes10 = Math.floor(monto / 10);
  monto = monto % 10;

  return {
    billetes50,
    billetes20,
    billetes10,
    restante: monto
  };
}

function simularCajero() {
  const monto = Number(prompt("Introduce el monto a retirar:"));
  const resultadoBilletes = calcularBilletes(monto);

  resultado.innerHTML = `
    <h3>Simulador de Cajero Automático</h3>
    <p><strong>Monto solicitado:</strong> ${monto}</p>
    <p>Billetes de 50: ${resultadoBilletes.billetes50}</p>
    <p>Billetes de 20: ${resultadoBilletes.billetes20}</p>
    <p>Billetes de 10: ${resultadoBilletes.billetes10}</p>
    <p>Restante no entregado: ${resultadoBilletes.restante}</p>
  `;
}

// 5. Ordenamiento por Calificaciones
function ordenarCalificaciones() {
  const estudiantes = [
    { nombre: "Fernando", nota: 85 },
    { nombre: "Priscila", nota: 92 },
    { nombre: "Mario", nota: 78 },
    { nombre: "Melina", nota: 95 }
  ];

  estudiantes.sort((a, b) => b.nota - a.nota);

  let html = "<h3>Ordenamiento por Calificaciones</h3>";

  estudiantes.forEach(function (estudiante) {
    html += `
      <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ccc;">
        <p><strong>Nombre:</strong> ${estudiante.nombre}</p>
        <p><strong>Nota:</strong> ${estudiante.nota}</p>
      </div>
    `;
  });

  resultado.innerHTML = html;
}