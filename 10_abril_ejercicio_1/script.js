const resultado = document.getElementById("resultado");

// 1. Saludo Mágico
function saludoMagico() {
  const nombre = prompt("¿Cuál es tu nombre?");
  resultado.innerHTML = `¡Bienvenido al reino de ${nombre}!`;
}

// 2. Edad Perruna
function edadPerruna() {
  const edadPerro = Number(prompt("¿Qué edad tiene tu perro?"));
  const edadHumana = edadPerro * 7;

  resultado.innerHTML = `Tu perro tiene ${edadHumana} años humanos.`;
}

// 3. Semáforo
function semaforo() {
  const color = prompt("Introduce un color (rojo, amarillo, verde)");

  if (color === "rojo") {
    resultado.innerHTML = "🚫 Debes parar";
  } else if (color === "amarillo") {
    resultado.innerHTML = "⚠️ Debes esperar";
  } else if (color === "verde") {
    resultado.innerHTML = "✅ Puedes pasar";
  } else {
    resultado.innerHTML = "Color no válido";
  }
}

// 4. Número Secreto
function numeroSecreto() {
  const numero = 7;
  const intento = Number(prompt("Adivina el número secreto"));

  if (intento === numero) {
    resultado.innerHTML = "🎉 ¡Correcto!";
  } else {
    resultado.innerHTML = `❌ Incorrecto. Era ${numero}`;
  }
}

// 5. Repetidor de Deseos
function repetirDeseo() {
  const deseo = prompt("¿Cuál es tu deseo?");
  const cantidad = Number(prompt("¿Cuántas veces?"));

  let texto = "";

  for (let i = 0; i < cantidad; i++) {
    texto += `${deseo} <br>`;
  }

  resultado.innerHTML = texto;
}