import React, { useContext } from 'react'
import TodoContext from '../../utils/TodoContext'

const TodoList = () => {

  const { items } = useContext(TodoContext)

  return (
    <ul>
      {
        items.length ? items.map(item => <li>{item}</li>) : null
      }
    </ul>
  )
}

export default TodoList
