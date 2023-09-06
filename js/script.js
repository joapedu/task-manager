function adiciona() {
    const tarefa = document.getElementById('tarefa').value

    var listaDeTarefas = document.getElementById('listaDeTarefas')

    var listaTarefasAdicionadas = listaDeTarefas.innerHTML.split('<li>')

    var existeTarefa = listaTarefasAdicionadas.includes(tarefa+'</li>')

    listaDeTarefas.innerHTML = listaDeTarefas.innerHTML + `<li>${tarefa}</li>`
}

function remove() {
    document.getElementById('tarefa').value = ''
}
