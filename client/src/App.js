import React from 'react';
import TodoDisplay from './components/TodoDisplay'
import TodoList from './components/TodoList'


const App = () => {
  const [todoState, setTodoState] = useState({
    item: '',
    items: []
  })
  todoState.handleInputChange = event => {
    setTodoState({ ...todoState,[event.target.name] : event.target.value})
  }

  todoState.handleAddTodo = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(todoState.items))
    items.push(todoState.item)
    setTodoState({...todoState, items, item: ''})
  }
  
}

export default App;
