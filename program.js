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
  
  //GUARDAMOS EL LOS DATOS DEL LOGIN TRANSFORMADOS EN JSON EN EL LOCALESTORAGE

  let storage = JSON.stringify(myObject);
  localStorage.setItem("miInfo", storage);
  console.log(myObject)

};


document.querySelector("#registro").addEventListener("click", () => {

  if (

    document.getElementById("nombre").value.length == 0 ||

    document.getElementById("apellido").value.length == 0

  ) {

    document.getElementById("mensaje").innerHTML = "Debe completar los campos requeridos";

  } else {

    window.location.href = "inicio.html";

  }

});
main();
