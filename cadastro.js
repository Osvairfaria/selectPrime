
function cadastro() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function dados(evento) {
    evento.preventDefault();

        const nome = form.getElementById('nome').value;
        const sobrenome = form.getElementById('sobrenome').value;
        const dataNasc = form.getElementById('dataNasc').value;
        const rg = form.getElementById('rg').value;
        const cpf = form.getElementById('cpf').value;

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            dataNasc: dataNasc.value,
            rg: rg.value,
            cpf: cpf.value
        });

         console.log(pessoas); 

         resultado.innerHTML = `<p> Nome: ${nome.value} </br> Sobrenome:   ${sobrenome.value}  </br> Data Nasc: ${dataNasc.value} </br> RG: ${rg.value}  </br> CPF: ${cpf.value} ** Cadastrado com sucesso **</p>`;
        
    }

form.addEventListener('submit', dados);

}

cadastro();