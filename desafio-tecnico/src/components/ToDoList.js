const ToDoList = () => {
return(
    <div>
<header><h1>Minha Lista de Tarefas</h1></header>
<p id = 'funcionamento'>Clique duas vezes em um item para marcá-lo como completo</p>
<input type="text" id="texto-tarefa"/>
<ol id="lista-tarefas">
</ol>
<button id = "criar-tarefa">criar tarefa</button>
<button id = "apaga-tudo">apaga tudo</button>
<button id = "remover-finalizados">remove finalizados</button>
<button id = "salvar-tarefas">Salvar Lista</button>
<button id = "mover-cima">mover para cima</button>
<button id = "mover-baixo">mover para baixo</button>
<button id = "remover-selecionado">remover selecionado</button>     </div>) };

export default ToDoList;
