function adiciona() {
    const tarefa = document.getElementById('tarefa').value

    let listaDeTarefas = document.getElementById('listaDeTarefas')

    let listaTarefasAdicionadas = listaDeTarefas.innerHTML.split('<li>')

    let existeTarefa = listaTarefasAdicionadas.includes(tarefa+'</li>')

    listaDeTarefas.innerHTML = listaDeTarefas.innerHTML + `<li>${tarefa}</li>`
}
