function adicionarContato() {
        var nome = document.getElementById("nome").value;
        var telefone = document.getElementById("telefone").value;
        $('telefone').mask('(00) 0000-0000');
        if (nome && telefone) {
            var tabela = document.getElementById("tabela-contatos");
            var row = tabela.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = nome;
            cell2.innerHTML = telefone;

            // Limpar campos após adicionar contato
            document.getElementById("nome").value = "";
            document.getElementById("telefone").value = "";
        } else {
            alert("Por favor, preencha o nome e o telefone do contato.");
        }
    }