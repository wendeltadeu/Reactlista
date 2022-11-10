import React, {useState, useRef} from 'react';
import './App.css'

export default function App() {

    //state
  const [listaTarefas, setListaTarefas] = useState(() => {return[]})
  const [tarefa, setTarefa] = useState(() => {return ''})

  //ref
  const idTarefa = useRef(0)
  const inputRef = useRef()

  //metodos
  function adicionarTarefa(){
    setListaTarefas(old =>{ return [...old,{id: idTarefa.current, texto: tarefa }]})
    idTarefa.current = idTarefa.current + 1 
    setTarefa('') 
    inputRef.current.focus()
  }

  function limparTarefas(){
    setListaTarefas(old => { return []} )
    idTarefa.current = 0
  }

  function removerTarefa(id){
    const tmp = listaTarefas.filter(tarefa => tarefa.id !== id )
    setListaTarefas(tmp)
  } 

  return (
    <div>
        <div className="container-fluid titulo">
            <div className="row">
                <div className="col text-center">
                     <h3 className="text-center">LISTA DE TAREFAS</h3>
                </div>
            </div>
        </div>
        <div className="container-fluid dados">
            <div className="row">
                <div className="col text-center">
                    <hr />
                    <input ref={inputRef} type="text" placeholder="Adicione o item"  value={tarefa} onChange={(evento) => {setTarefa(evento.target.value)}}/>
                    <hr />
                    <div>
                      <button className='btn btn-large btn-primary' onClick={adicionarTarefa}>Adicionar</button>
                      <button className='btn btn-large btn-secondary' onClick={limparTarefas}>Limpar tudo</button>
                      <hr />
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid formulario">
            <div className="row">
                <div className="col text-center">
                    <p>TAREFAS</p>
                    {listaTarefas.map((tarefa) => {
                        return <p key={tarefa.id}>{tarefa.texto} - <span onClick={() => { removerTarefa(tarefa.id) } }>[remover]</span> </p>

                    })}
                  </div>
              </div>
         </div>
    </div>
  );
}
