import React, { createContext } from 'react'

const TodoContext = createContext({
    item: '',
    items: [],
    handleInputChange: () => { },
    handleAddTodo: () => { }
  })
  
  export default TodoContext