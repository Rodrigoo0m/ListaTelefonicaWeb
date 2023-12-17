document.getElementById('adicionar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;

    if (nome && email && numero) {
        adicionarContato(nome, email, numero);
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('numero').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function adicionarContato(nome, email, numero) {
    const lista = document.getElementById('lista-de-contatos');
    const item = document.createElement('li');
    item.textContent = `${nome}: ${email}, ${numero}`;
    lista.appendChild(item);
}
