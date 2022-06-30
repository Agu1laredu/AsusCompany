let main = function () {
  captura_boton();
};

let captura_boton = function () {
  document
    .querySelector(".myButton input")
    .setAttribute("onclick", "dataRead()");
};

let dataRead = function () {
 
  let myObject = {
    nombre: document.querySelector("#nombre").value,
    apellido: document.querySelector("#apellido").value,
    email: document.querySelector("#email").value,
    pass: document.querySelector("#pass").value,
  };
  JSON.stringify(myObject);
  localStorage.setItem("miInfo", "myObject");
  console.log(myObject)

};
main();

document.querySelector("#registro").addEventListener("click", () => {
  window.location.href = "inicio.html";
});


// let Entrar = function () { document.querySelector("#registro").addEventListener("click", () => {
//   window.location.href = "inicio.html";
// });} 

// function VerificarIngreso() {
//   if (document.getElementById("nombre").value ) {
//    return (Entrar)
//   } else {
//     document.getElementById("mensaje").innerHTML =
//       "Debe completar los campos requeridos";
//   }
// }