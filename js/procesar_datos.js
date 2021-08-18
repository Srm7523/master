function envio_datos(){
    var user = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;

    if (user.length == 0 || user ==""){
        alert("Usuario invalido, ingresa un usuario");

    }else if(pass.length == 0 || pass == ""){
        alert("Contraseña incorrecta, ingresa tu contraseña");

    }else if(user == "salvador_reyes" && pass== "1234"){
        window.location.replace('/index.html');
    }else{
    alert("Usuario y constraseña invalidas");
}
    return false;
}
