const resultado = document.getElementById("resultado");

// 1. El Objeto Coche
function objetoCoche() {
  const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false,
    arrancar: function () {
      this.encendido = true;
    }
  };

  coche.arrancar();

  resultado.innerHTML = `
    <h3>Objeto Coche</h3>
    <p><strong>Marca:</strong> ${coche.marca}</p>
    <p><strong>Modelo:</strong> ${coche.modelo}</p>
    <p><strong>Encendido:</strong> ${coche.encendido}</p>
  `;
}

// 2. Generador de Nombres de Usuario
function generarUsuario() {
  const nombreCompleto = prompt("Introduce nombre y apellido, por ejemplo:  Tim Burton");
  const partes = nombreCompleto.toLowerCase().split(" ");
  const nombre = partes[0];
  const apellido = partes[1];

  const usuario = nombre[0] + apellido + "_dev";

  resultado.innerHTML = `
    <h3>Generador de Usuario</h3>
    <p>Usuario generado: <strong>${usuario}</strong></p>
  `;
}

// 3. FizzBuzz Clásico
function fizzBuzz() {
  let texto = "<h3>FizzBuzz</h3>";

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      texto += "FizzBuzz <br>";
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      texto += "Fizz <br>";
      console.log("Fizz");
    } else if (i % 5 === 0) {
      texto += "Buzz <br>";
      console.log("Buzz");
    } else {
      texto += i + "<br>";
      console.log(i);
    }
  }

  resultado.innerHTML = texto;
}

// 4. Suma de Carrito
function sumaCarrito() {
  const productos = [
    { nombre: "Pan", precio: 2 },
    { nombre: "Leche", precio: 1.5 },
    { nombre: "Huevos", precio: 5 }
  ];

  let total = 0;
  let html = "<h3>Carrito de Compra</h3>";

  productos.forEach(function (producto) {
    html += `
      <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ccc;">
        <p><strong>Producto:</strong> ${producto.nombre}</p>
        <p><strong>Precio:</strong> €${producto.precio}</p>
      </div>
    `;
    total += producto.precio;
  });

  html += `<h4>Total de la compra: €${total}</h4>`;

  resultado.innerHTML = html;
}

// 5. Validación de Password
function validarPassword() {
  const password = prompt("Introduce una contraseña");

  if (password.length > 8 && password.includes("A")) {
    resultado.innerHTML = `
      <h3>Validación de Password</h3>
      <p>Password válido</p>
    `;
  } else {
    resultado.innerHTML = `
      <h3>Validación de Password</h3>
      <p>Password no válido</p>
    `;
  }
}