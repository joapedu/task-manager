function adiciona() {
    const tarefa = document.getElementById('tarefa').value;
    let listaDeTarefas = document.getElementById('listaDeTarefas');

    //  obter as tarefas da lista
    let listaTarefasAdicionadas = listaDeTarefas.querySelectorAll('li');

    // verificação da tarefa dentro da lista
    let existeTarefa = false;
    listaTarefasAdicionadas.forEach(item => {
        if (item.textContent === tarefa) {
            existeTarefa = true;
            return 0;
        }
    });

    if (existeTarefa) {
        alert('Esta tarefa já existe na lista.');
    } else {
        // Adicione a tarefa à lista
        listaDeTarefas.innerHTML += `<hr><li>${tarefa}</li> <button class="glow-on-hover" type="button" onClick="removeTarefa(this)" style="width: 32%; margin-left: 75%">Feito!</button>`;
        document.getElementById('tarefa').value = '';
    }
}

function removeTarefa(button) {
    let tarefaParaRemover = button.parentElement;
    tarefaParaRemover.remove();
}

function removeTudo(button){
    location. reload();
}
