import { useState } from "react";
import '../App.css';

const Item = ({item, removeItem, updateItem}) => {
  const [canUpdate, setCanUpdate] = useState(false)
  const [inputValue, setInputValue] = useState(item.name)

  const toggleCanUpdate = () => {
    setCanUpdate(!canUpdate)
  }

  const handleSave = () => {
    updateItem(item, inputValue)
    toggleCanUpdate()
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSave()
    }
  }

  const getStyle = () => {
    const lower = item.name.toLowerCase()
    if(lower.includes('ler') || lower.includes('estudar')){
      return true
    }

    return false
  }

  return (
    <>
      <li >
        <div className="item">
          <input type="checkbox" name="itemCheck" id="itemChek" value={item.enable} />

          {!canUpdate &&
            <>
              <p style={getStyle() ? {backgroundColor: 'skyblue'} : {}}>{item.name}</p>
              <button onClick={() => toggleCanUpdate()}>Alterar</button>
            </>
          }

          {canUpdate && 
            <>
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => handleKeyPress(e)} />            
              <button onClick={handleSave}>Salvar</button>
            </>
          }

          <button disabled={canUpdate} onClick={() => removeItem(item)}>Excluir</button>
        </div>
        
      </li>
    </>
  )
}

export default Item;