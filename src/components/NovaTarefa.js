const NovaTarefa = (props) => {
  const { addTarefa } = props;

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      const tarefa = {
        enable: false,
        name: e.target.value
      }

      addTarefa(tarefa);
      e.target.value = ""
    }
  }  

  return <div>
    <label htmlFor="tarefa">Tarefa: </label>
    <input name="tarefa" type="text" onKeyPress={(e) => handleKeyPress(e)} style={{width: '350px'}}/>
  </div>
}

export default NovaTarefa;