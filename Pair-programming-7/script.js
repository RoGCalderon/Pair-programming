let operacion= parseInt(prompt('Elija una opción: 1-Eliminar, 2-Agregar, 3- consultar por DNI'));


let agenda = [
    {nombre: 'Dario', apellido:'Perez',dni: 37857965, telefono: 2235996684},
    {nombre: 'Lidia', apellido:'Quiroga',dni: 16555203, telefono: 2233005489},
    {nombre: 'Monica', apellido:'Rodriguez', dni: 55337852, telefono: 2235968574}
]

function menu(operacion){
    switch(operacion){
        case 1: 
        let eliminar =parseInt(prompt('Ingrese el dni de la persona que desea eliminar'));
        borrarPersona(agenda,eliminar);
        console.log(agenda);
        break;
        case 2:
        prompt('Ahora va a ingresar los datos de un nuevo contacto');
        agregarPersona(agenda);
        console.log(agenda);
        break;
        case 3: 
        prompt('Va a consultar la agenda por número de DNI');
        let documento=parseInt(prompt('Ingrese el DNI de la persona que desea consultar'));
        consultarPersona(documento)
    }
}

//Función para eliminar a una persona de la agenda
function borrarPersona(array, eliminar){ //Este for itera el array principal 
    for(let i=0; i<=array.length; i++){
        console.log(agenda[i]);
        let subAgenda= agenda[i];
        for(let j=0; j<=subAgenda.length;j++){ //este for recorre cada  array 'interno'
            if(eliminar === [j]){
                agenda.splice([j],1);
            }
        }
    }
}
//función para agregar a una persona en la agenda

function agregarPersona(agenda){
    let nuevo= [] //Este for itera el array principal 
    let dni = parseInt(prompt('Ingrese el Dni de la nueva persona:'));
    nuevo.push(dni)
    let nombre = prompt('Ingrese el nombre de la nueva persona:');
    nuevo.push(nombre);
    let apellido = prompt('Ingrese el apellido de la nueva persona:');
    nuevo.push(apellido);
    let telefono = parseInt(prompt('Ingrese el telefono de la nueva persona:'));
    nuevo.push(telefono);
    agenda.push(nuevo)
}

//console.log(agenda)

function consultar(agenda,documento){
    for(let i=0; i<=agenda.length; i++){
        console.log(agenda[i]);
        let subAgenda= agenda[i];
        for(let j=0; j<=subAgenda.length;j++){ //este for recorre cada  array 'interno'
            if(documento === [j]){
                let coincidencia = [j]
                console.log(coincidencia);
            }
        }
    }
}