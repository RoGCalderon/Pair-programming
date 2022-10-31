//valores que tomo de los input


//botones
let btnAgregar = document.getElementById("btn-agregar");
let btnEliminar = document.getElementById("btn-eliminar");
let btnModificar = document.getElementById("btn-editar");

let agenda = [];

class Persona {
    nombre;
    apellido;
    documento;
    telefono;

    constructor(nombre, apellido,documento, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.documento = documento;
      this.telefono = telefono;
    }
}
// Funciones:

//Evento para el botón agregar
btnAgregar.addEventListener("click",()=>{
    let nombres = document.getElementById("nombre").value;
let apellidos = document.getElementById("apellido").value;
let documentos = document.getElementById("documento").value;
let telefonos = document.getElementById("telefono").value;
    let nuevo = new Persona (nombres,apellidos,documentos,telefonos);
    agenda.push(nuevo);
    datos();
    console.log()
}  )

//Insertar los datos en la tabla 
function datos(){

var v = "";
agenda.forEach( (nuevo,index )=>{
 
  v += '<tr><td>'+ nuevo.nombre+'</td><td>'+ nuevo.apellido+'</td><td>'+nuevo.documento+'</td><td>'+nuevo.telefono+'</td><td>'+'<button class="button" id="edit" > Editar</button>'+'</td><td>'+'<button class="button" id="delete"> Eliminar</button>'+'</td></tr>'

} )

    document.getElementById("t-body").innerHTML = v; 
}
 
//Función para editar los datos
function editarDatos(td){

}
