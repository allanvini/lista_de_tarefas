var listElement = document.querySelector('#app ul');
var newElement = document.getElementById('novaTarefa');
var buttonElement = document.getElementById('adicionar');

var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || [];

function renderToDo (){
    listElement.innerHTML = '';
    for (toDo of tarefas){
        var toDoElement = document.createElement('li');
        var tarefa = document.createTextNode(toDo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href' , '#');
        var linkText = document.createTextNode('Excluir/Realizado');
        linkElement.appendChild(linkText);

        var pos = tarefas.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deletaTarefa(' + pos + ')');

        toDoElement.appendChild(tarefa);
        toDoElement.appendChild(linkElement);
        listElement.appendChild(toDoElement);

    }
}

renderToDo();

function addTarefas(){
    var tarefaText = newElement.value;
    tarefaText = tarefaText+" - ";
    tarefas.push(tarefaText);
    newElement.value = '';
    renderToDo();
    saveList();
}

buttonElement.onclick = addTarefas;

function deletaTarefa (pos){
    tarefas.splice(pos, 1);
    renderToDo();
    saveList();
}

function saveList(){
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas));
}