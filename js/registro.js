const validarForm = ()=>{
    let inputNombre = document.querySelector(".nombre").value;
    let inputApodo = document.querySelector(".apodo").value;
    let inputEmail = document.querySelector(".email").value;
    let inputCelular = document.querySelector(".celular").value;
    let inputPassword = document.querySelector(".password").value;
    let validar = true;
    if(inputNombre == ""){
        document.querySelector(".inputNombre").style.border = "1px solid #f00";
        validar = false;
    }
    else document.querySelector(".inputNombre").style.border = "1px solid #0f0";
    if(inputApodo == ""){
        document.querySelector(".inputApodo").style.border = "1px solid #f00";
        validar = false;
    }
    else document.querySelector(".inputApodo").style.border = "1px solid #0f0";
    if(inputEmail == "" || inputEmail.includes("@") == false || inputEmail.includes(".") == false){
        document.querySelector(".inputEmail").style.border = "1px solid #f00";
        validar = false;
    }
    else document.querySelector(".inputEmail").style.border = "1px solid #0f0";
    if(inputCelular.search(/[^0-9]/) >= 0)document.querySelector(".inputCelular").style.border = "1px solid #f00";
    else if(inputCelular == "") inputCelular = "No Registrado";
    else document.querySelector(".inputCelular").style.border = "1px solid #0f0";
    if(inputPassword == ""){
        document.querySelector(".inputPassword").style.border = "1px solid #f00";
        validar = false;
    }
    else document.querySelector(".inputPassword").style.border = "1px solid #0f0";
    if(validar) newUser(inputNombre,inputApodo,inputEmail,inputCelular,inputPassword);
    else alert("Algún campo esta vació o mal llenado");
}
const newUser = (nombre,apodo,correo,celular,password)=>{
    alert(`${nombre}, ${apodo}, ${correo}, ${celular}, ${password}`);
}
document.querySelector(".enviarRegistro").addEventListener("click",validarForm);