// Obteniendo la información por medio del DOM y los IDS

// Campos compartidos entre pacientes y médicos
const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const cedula = document.getElementById("cedula")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")


// Campo propio de los médicos

const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")

// Campos propios de los pacientes

const edad = document.getElementById("edad")

// Llamado de los formularios

const formularioMedicos = document.getElementById("registro-medicos-form")

const formularioPacientes = document.getElementById("registro-pacientes-form")

class Usuario{

    constructor(nombres, apellidos, cedula, telefono, especialidad){
        this.nombres = nombres
        this.apellidos = apellidos
        this.cedula = cedula
        this.telefono = telefono
        this.especialidad = especialidad

    }

}

///El evento para formularioMedicos va a ser de tipo enviar o guardar es decir de tipo submit
formularioMedicos.addEventListener("submit", function(){

    //Previene que la pagina se recargue sin antes hacer la logica del addEventListener
    event.preventDefault()


    let valorNombres = nombres.value
    let valorApellidos = apellidos.value
    let valorCedula = cedula.value
    let valorConsultorio = consultorio.value
    let valorTelefono = telefono.value
    let valorCorreo = correo.value
    let valorEspecialidad = especialidad.value

    const medico  = new Usuario(valorNombres, valorApellidos ,valorCedula, valorConsultorio,valorTelefono , valorCorreo, valorEspecialidad)
    medico.consultorio = valorConsultorio
    medico.correo = valorCorreo

    console.log(medico)
    alert("Medico registrado")
    

})