let main = function () {
  captura_boton();
};

let captura_boton = function () {
  document
    .querySelector(".myButton input")
    .setAttribute("onclick", "dataRead()");
};

let dataRead = function () {
  console.log("No hay datos ingresados");
  console.log(
    document.querySelector("#nombre").value,
    document.querySelector("#apellido").value,
    document.querySelector("#email").value,
    document.querySelector("#pass").value
  );
  let myObject = {
    nombre: document.querySelector("#nombre").value,
    apellido: document.querySelector("#apellido").value,
    email: document.querySelector("#email").value,
    pass: document.querySelector("#pass").value,
  };
  JSON.stringify(myObject);

  //guardamos los datos en localStorage
  save_localStorage(myObject);
};

let save_localStorage = function (myObjecto) {
  localStorage.setItem("miInfo", JSON.stringify(myObjecto));
};
let read_localStorage = function () {
  let miInfo = localStorage.getItem("miInfo");
  let myObject = JSON.parse(miInfo);
  console.log(myObject);
  document.querySelector("#nombre").value = myObject.nombre
  document.querySelector("#apellido").value = myObject.apellido
  document.querySelector("#email").value = myObject.email
  document.querySelector("#pass").value = myObject.pass;
  document.querySelector("#error").value = myObject.error;
  
};

main();


const name = document.getElementById('name')
const appelido = document.getElementById('apellido')
const pass = document.getElementById('pass')

form.addEventListener("Registro", (e)=>{
    e.preventDefault()
    let menssages = []
    if(nombre.value === '' || name.value == null) {
        menssages.push('Name is required')
    }

    if (password.length >= 20){
        menssages.push('Password must be longer than 20 characters')
    }
    if (password.value == 'password'){
        menssages.push('Password cannot be password')
    }

    if  (menssages.length > 0) {
        e.preventDefault()
        errorElement.innerText = menssages.join(', ')
}
})