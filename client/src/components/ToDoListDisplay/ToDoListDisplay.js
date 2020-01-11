import React, { useContext } from 'react'
import TodoContext from '../../utils/TodoContext'

const ToDoListDisplay = () => {
 const { item, handleInputChange, handleAddTodo } = useContext(TodoContext)
 
  return (
    <form>
      <p>
        <label htmlFor="item">item</label>
        <input
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <button onClick={handleAddTodo}>Add Item</button>
      </p>
    </form>
  )
}

export default ToDoListDisplay
