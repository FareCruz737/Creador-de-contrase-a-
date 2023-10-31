let mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let simbolos = ['á', 'é', 'í', 'ó', 'ú', 'ü', 'ñ', '¿', '¡', '!', '?', '(', ')', '[', ']', '{', '}', '.', ',', ':', ';', '-', '_', '"', "'", '*', '&', '#', '$', '%', '/', '=', '+', '<', '>', '|', '\\'];

let longitud = 3 ;
let pwd = '';

function generarContrasena() {

  let contrasena = '';
  for (let i = 0; i < longitud; i++) {
    const num = Math.floor(Math.random() * mayusculas.length);
    const num2 = Math.floor(Math.random() * minusculas.length);
    const num3 = Math.floor(Math.random() * numeros.length);
    const num4 = Math.floor(Math.random() * simbolos.length);

    let partes = mayusculas[num] + minusculas[num2] + numeros[num3] + simbolos[num4];
    contrasena += partes;
  }

  return contrasena;
}

const pwd2 = document.getElementById('pwd');
const boton = document.querySelector(".boton");

boton.addEventListener("click", () => {
  const contrasena = generarContrasena();
  pwd2.value = contrasena;
  console.log("Nueva contraseña generada: " + contrasena);
});

const contrasenaInicial = generarContrasena();
pwd2.value = contrasenaInicial;

