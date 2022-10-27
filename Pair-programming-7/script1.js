let agenda = [
    [37857965,'Dario','Perez',2235996684],
    [16555906,'Lidia', 'Quiroga', 2235080865], 
    [55338965, 'Monica', 'Perez',2236475896],
    [35320965,'Veronica','Robledo',2235121236]
];
let documento = parseInt(prompt('Ingrese documento'));

function consultar(agenda,documento){
    for(let i=0; i<=agenda.length; i++){
        //console.log(agenda[i]);
        let subAgenda= agenda[i];
        for(let j=0; j<= subAgenda.length ;j++){ //este for recorre cada  array 'interno'
            if(documento === [j]){
                let coincidencia = [j]
                console.log(coincidencia);
            }
        }
    }
    
}

console.log(consultar(agenda,documento));
