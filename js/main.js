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
        listaDeTarefas.innerHTML += `<li>${tarefa}</li>`;
        document.getElementById('tarefa').value = '';
    }
}