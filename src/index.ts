const form = document.getElementById('form') as HTMLFormElement;
const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement;

   
btnGuardar.addEventListener('click', (e) => {
    //e.preventDefault();
    console.log("ingreso a la validacion del formulario");

     //OBTENER LOS VALORES DE LOS INPUTS
     const tipoDocumento = document.getElementById('tipoDocumento') as HTMLInputElement;
     const numeroDocumento = document.getElementById('numeroDocumento') as HTMLInputElement;
     const nombre = document.getElementById('nombre') as HTMLInputElement;
     const apellido = document.getElementById('apellido') as HTMLInputElement;
     const celular = document.getElementById('celular') as HTMLInputElement;
     const email = document.getElementById('email') as HTMLInputElement;
     const likedin = document.getElementById('likedin') as HTMLInputElement;
     const github = document.getElementById('github') as HTMLInputElement;

     //VALIDACION DEL FORMULARIO
     console.log(tipoDocumento.value);

});