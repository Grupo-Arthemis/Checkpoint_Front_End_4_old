"use strict";

// var emailRegExp = /\S+@\S+\.\S{3,}/;

//Verificando se a lista de usuários existe no localStorage
var listaUser = JSON.parse(localStorage.getItem("listaUser"));
if (listaUser == null) {
    console.log("Lista de usuários não encontrada, criando lista...");
    let listaDeUsuarios = [
        {
            nomeUsuario : "Admin",
            emailUsuario : "Admin",
            senhaUsuario: "123456",
            TelefoneUsuario: "12345678901"
        },
    ];
    localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));
};

const botao = document.querySelector("#Botao");

console.log(botao)


// email.addEventListener("focus", ()=>{
//     if (email.value.length < 5){
//         email.setAttribute("style","outline-color:#ff0000;")}
// });

// email.addEventListener("keyup", ()=>{
//     if((email.value.length < 5)||(!emailRegExp.test(email.value))) {
//         email.setAttribute("style","outline-color:#ff0000;")
        
//     }else{
//         email.setAttribute("style","outline-color:#00ff00;")
//     }
// });


// Validacao de Login
document.addEventListener("keypress", function(event) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser"));
    const msgError = document.querySelector("#msgError");

    let usuarioValidado = {
        email: document.querySelector("#Email").value,
        senhaInput: document.querySelector("#Senha").value,
    }

    if (event.key === "Enter") {
        try {
            listaUser.forEach((usuario) => {
                if (usuarioValidado.email == usuario.emailUsuario && usuarioValidado.senhaInput == usuario.senhaUsuario) {
                    usuarioValidado["nomeCompleto"] = usuario.nomeUsuario;
                    usuarioValidado["Telefone"] = usuario.TelefoneUsuario;
                    throw "VALIDADO!";
                }
            });
    
            throw "Usuário ou senha inválidos!";
        } catch (msg) {
            if (msg == "VALIDADO!") {
                localStorage.setItem("usuario-validado", JSON.stringify(usuarioValidado));
                msgError.setAttribute("style", "color:#F4EFE3;background-color:#618985;display:block;");
                msgError.innerHTML = "<strong>Usuário validado!</strong>";
                setTimeout(function() {
                    window.location.href = "../home.html";
                }, 3000);
            } else {
                msgError.innerHTML = "<strong>Login inválido!</strong>";
                msgError.setAttribute("style","color:#F4EFE3;background-color:#990000;display:block;")
            }
        }
    }
});

botao.addEventListener("click", ()=>{
        let listaUser = JSON.parse(localStorage.getItem("listaUser"));
        const msgError = document.querySelector("#msgError");

        let usuarioValidado = {
            email : document.querySelector("#Email").value,
            senhaInput : document.querySelector("#Senha").value,
        }

        try{
            listaUser.forEach((usuario)=>{
                if(usuarioValidado.email == usuario.emailUsuario && usuarioValidado.senhaInput == usuario.senhaUsuario){
                    usuarioValidado["nomeCompleto"] = usuario.nomeUsuario;
                    usuarioValidado["Telefone"] = usuario.TelefoneUsuario;
                    throw "VALIDADO!";
                }
            });

            throw "Usuário ou senha inválidos!";
        }catch(msg){

            if(msg == "VALIDADO!"){
                
                localStorage.setItem("usuario-validado", JSON.stringify(usuarioValidado))

                msgError.setAttribute("style","color:#F4EFE3;background-color:#618985;display:block;")
                msgError.innerHTML = "<strong>Bem vindo!</strong>"

                setTimeout(function () {
                    window.location.href = "../pages/home.html";
                }, 3000 );
            }else{
                msgError.setAttribute("style","color:#F4EFE3;background-color:#990000;display:block;")
                msgError.innerHTML = "<strong>Login invalido!</strong>";
            }

        }
    }
);

// Ver e desver a senha
const SenhaVer = document.querySelector(".eye");

SenhaVer.addEventListener("click", ()=>{
    const inputPass = document.querySelector("#Senha");

    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
        SenhaVer.setAttribute("class","fa fa-eye eye");
    }else{
        inputPass.setAttribute("type","password");
        SenhaVer.setAttribute("class","fa fa-eye-slash eye");
    }

});