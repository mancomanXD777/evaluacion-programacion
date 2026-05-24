function registrarse() {

    let correo =
    document.getElementById("registroCorreo").value;

    let usuario =
    document.getElementById("registroUsuario").value;

    let password =
    document.getElementById("registroPassword").value;



    localStorage.setItem("correo", correo);

    localStorage.setItem("usuario", usuario);

    localStorage.setItem("password", password);



    alert("Usuario registrado");
}





function iniciarSesion() {

    let usuario =
    document.getElementById("loginUsuario").value;

    let password =
    document.getElementById("loginPassword").value;



    let usuarioGuardado =
    localStorage.getItem("usuario");

    let passwordGuardada =
    localStorage.getItem("password");



    if (usuario == usuarioGuardado &&
        password == passwordGuardada) {

        alert("Inicio de sesión correcto");

    } else {

        alert("Usuario o contraseña incorrectos");
    }
}