const formularioRegistro = document.querySelector("#formularioR")
const contenedorusuariosHTML = document.querySelector(".contenedorusuarios")
const btnsweet = document.getElementById("btn-sweet")

const usuarios = []


const MensajeOK = {
    title: "Enviamos tu información",
    icon: "success",
    iconColor: "black",
    text: "En breve nos estaremos comunicando!",
    confirmButtonText: "OK",
    customClass: {
      confirmButton: "boton-rojo"
    }
};


const renderizarUsuarios = () => {
    contenedorusuariosHTML.innerHTML = ""
    for(const usuario of usuarios){
        contenedorusuariosHTML.innerHTML += `
        <div class="carduser">
            <h2>Nombre: ${usuario.nombre}</h2>
            <h2>Apellido: ${usuario.apellido}</h2>
            <p>Email: ${usuario.email}</p>
            <p>Telefono: ${usuario.tel}</p>
            <p>Modelo: ${usuario.modelo}</p>
            <p>Comentario: ${usuario.comentario}</p>
        </div>
        `
    }
}

formularioRegistro.addEventListener("submit",(event) =>{event.preventDefault()
    usuarios.push({
        nombre: formularioRegistro.nombre.value,
        apellido: formularioRegistro.apellido.value,
        email: formularioRegistro.email.value,
        tel: formularioRegistro.tel.value,
        modelo: formularioRegistro.modelo.value,
        comentario: formularioRegistro.comentario.value
    })

    Swal.fire(MensajeOK)
    renderizarUsuarios()
    formularioRegistro.reset()
})


console.log("formularioRegistro.tel.value")
