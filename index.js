
function logar() {
   
    const email = document.getElementById('email').value;
    const passaword = document.getElementById('password').value;

    if (email == 'osvairfaria@outlook.com' && passaword == '822306') {
        alert('Sucesso');
        location.href = "paginas/logado.html";
    }else {
        alert('Usuario ou Senha Incorretos');
    }
}

logar();