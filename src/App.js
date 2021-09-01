import './App.css';
import {useState} from 'react'
import Header from './Header/Header';
import List from './List/List';

function App() {
  const todos = window.localStorage.getItem('todos')
  const [todoState, setTodoState] = useState([
    {
      id: 1,
      text: 'Playing Football',
      done: true
    },
    {
      id: 2,
      text: 'Go out',
      done: false
    },
  ])

  const delHandler = (id)=>{
    console.log(id)
    const newTodos  = todoState.filter( todo => { return todo.id !== id})
    setTodoState(newTodos)
  }

  return (
    <div className="App">
      <Header/>
      <List todos={todoState} delete={delHandler}/>
      
    </div>
  );
}

export default App;
