import './App.css';
import {useState} from 'react'
import Header from './Header/Header';
import List from './List/List';

function App() {
  // const todos = window.localStorage.getItem('todos')
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

  const addHandler = (todoText)=>{
    if(todoText.length>0){
      let newTodos = [...todoState]
      newTodos.unshift({id: Math.floor(Math.random()*1000), text: todoText, done:false})
      console.log(newTodos,Math.floor(Math.random()*1000))
      setTodoState(newTodos)
    }
  }

  const delHandler = (id)=>{
    const newTodos  = todoState.filter( todo => { return todo.id !== id})
    setTodoState(newTodos)
  }
  const changeHandler = (id)=>{
    let newTodos  = [...todoState]
    const a = new Promise((resolve, reject)=>{
      newTodos.forEach((todo,i) =>{
        if(todo.id === id){
          newTodos[i].done = !newTodos[i].done
          resolve(true)
        }
      })
    })
    
    a.then(res=>{
      if (res){
        setTodoState(newTodos)
      }
    })

  }

  return (
    <div className="App">
      <Header add={addHandler}/>
      <List todos={todoState} delete={delHandler} change={changeHandler}/>
      
    </div>
  );
}

export default App;
