import { useState } from 'react';
import './App.css';
import NovaTarefa from './components/NovaTarefa';
import Item from './components/Item'

const App = () => {
  const [listaTarefas, setListaTarefas] = useState([])

  const addTarefa = (item) => {
    setListaTarefas([
      ...listaTarefas,
      item
    ])
  }

  const removeTarefa = (item) => {
    const newList = listaTarefas.filter(tarefa => tarefa !== item)

    setListaTarefas(newList)
  }

  const updateTarefa = (item, value) => {
    const index = listaTarefas.findIndex(findItem => findItem === item)

    listaTarefas[index].name = value

    setListaTarefas(listaTarefas)
  }

  return (
    <div className='taskBox'>
      <h1>Tarefa 4</h1>

      <br />

      <NovaTarefa addTarefa={addTarefa}/>

      <ul style={{listStyleType: 'none'}}>
        {listaTarefas.map((item, index) => {
          return (
            <Item key={index} item={item} removeItem={removeTarefa} updateItem={updateTarefa} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
