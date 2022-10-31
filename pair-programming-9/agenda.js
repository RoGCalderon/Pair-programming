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

//Función para agregar contacto: 


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


let modificarContacto = (documento) =>{
    let contactoExistente = agenda.find(element => element.documento === documento);

}

function datos(){

var v = "";
agenda.forEach( (nuevo,index )=>{
 
    v += '<tr><td>'+ nuevo.nombre+'</td><td>'+ nuevo.apellido+'</td><td>'+nuevo.documento+'</td><td>'+nuevo.telefono+'</td></tr>'

} )

  document.getElementById("tabla").innerHTML = v; 
}