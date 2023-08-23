let input = document.getElementById("input");
let btnAdd = document.getElementById("btnAdd");
let areaLista = document.getElementById("areaLista");
let contador = 0;

function salvarTarefa(){
    let tarefa = input.value;
    if(tarefa === "" || tarefa === null || tarefa === undefined){
        alert("Favor, escreva sua tarefa!")
    }else{
        ++contador;
        let novaTarefa = `<div id="${contador}" class="item">
        <div onClick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="mdi mdi-circle-outline"></span>
        </div>
        <div class="item-nome">
            ${tarefa}
        </div>
        <div class="item-botao">
            <button onClick="deletarTarefa(${contador})" class="delete"><span class="mdi mdi-trash-can-outline"></span>
                Deletar
            </button>
        </div>
    </div>`;

    areaLista.innerHTML += novaTarefa;

    input.value = ""
    input.focus();

    }
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if(classe == 'item'){
        item.classList.add('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

//Criar tarefa clicando ENTER do teclado
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

function deletarTarefa(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}