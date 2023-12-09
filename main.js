const form = document.getElementById('contatoForm'); //define a constante "form" para buscar dentro do html o id .contatoform
const contatos = []; //define uma array para armazenar os dados 
const telefones = [];


form.addEventListener('submit', function(e){ //cria o evento de submit ao clicar no buttom ''cadastrar'' e remove comportamento ao clicar no butao de resetar a pagina
    e.preventDefault();
    adicionarContato(); //chama a função adicionarContato()
})

function adicionarContato() {
    const inputNomeContato = document.getElementById('nome-contato'); //busca os inputs no html e salva na const
    const inputNumeroTelefone = document.getElementById('telefone-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} com telefone: ${inputNumeroTelefone.value} ja foi inserido`) //se o contato ja tiver incluso, alerte o usuario
    } else { //senao adicione o contato
        contatos.push(inputNomeContato.value);
        telefones.push(parseFloat(inputNumeroTelefone.value));
        let tabela = document.getElementById("tabelaContatos"); //define o id tabelaContatos como a const tabela
        let linha = tabela.insertRow(-1); //O método insertRow() cria um elemento <tr> vazio e o adiciona a uma tabela. O método insertRow() insere as novas linhas no índice especificado na tabela.
        let colunaNome = linha.insertCell(0); //insere uma nova célula ( <td>) em uma linha da tabela ( <tr>) e retorna uma referência à célula.
        let colunaTelefone = linha.insertCell(1);

        colunaNome.innerHTML = inputNomeContato.value; //define uma const que usa o querySelector para entrar no tbody
        colunaTelefone.innerHTML = inputNumeroTelefone.value; // pega a const 'corpoTabela' e com o innerHTML adiciona na tag o conteudo de 'linha'

        inputNomeContato.value = ''; // limpa o valor do campo de entrada nome-contato
        inputNumeroTelefone.value = ''; // limpa o valor do campo de entrada telefone-contato
    }
};





