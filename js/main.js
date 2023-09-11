function adiciona() {
    const tarefa = document.getElementById('tarefa').value

    //repetição dos elementos da lista
    //if da tarefa existente dentro da lista(instância de procura)
    //return com alert

    let listaDeTarefas = document.getElementById('listaDeTarefas')

    let listaTarefasAdicionadas = listaDeTarefas.innerHTML.split('<li>')

    let existeTarefa = listaTarefasAdicionadas.includes(tarefa+'</li>')

    listaDeTarefas.innerHTML = listaDeTarefas.innerHTML + `<li>${tarefa}</li>`

    document.getElementById('tarefa').value='';
}
