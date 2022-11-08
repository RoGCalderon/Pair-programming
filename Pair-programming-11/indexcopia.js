
let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))


const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < 4; i++) {
        body += `<div class="card ms-4 me-4" style="width: 18rem;">
        <div class="card-body"><h5 class="card-title">${data[i].title}</h5><p class="card-text">${data[i].body}</p><button onclick="mostrarModal(${data[i].id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btn">
        Comentarios
      </button></div></div> `
    }

    document.getElementById('data').innerHTML = body;
}
function mostrarModal (data){
alert("data");
const modalTitle = document.querySelector('.modal-title')
modalTitle.innerHTML="ejemplo"

}
/*
const exampleModal = document.getElementById('staticBackdrop')
exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.btn
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')

    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
})

*/