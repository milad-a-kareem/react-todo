import './App.css';
import {useState} from 'react'
import Header from './Header/Header';
import List from './List/List';

function App() {
  let myStorage = window.localStorage
  let todos = myStorage.getItem('todos')
  const [todoState, setTodoState] = useState([
    
  ])

  

  const addHandler = (todoText)=>{
    if(todoText.length>0){
      let newTodos = [...todoState]
      newTodos.unshift({id: Math.floor(Math.random()*1000), text: todoText, done:false})
      setTodoState(newTodos)
      myStorage.setItem('todos', JSON.stringify(newTodos))
      todos = myStorage.getItem('todos')
    }
  }

  const delHandler = (id)=>{
    const newTodos  = todoState.filter( todo => { return todo.id !== id})
    setTodoState(newTodos)
    myStorage.setItem('todos', JSON.stringify(newTodos))
    todos = myStorage.getItem('todos')
  }
  const changeHandler = (id , s)=>{
    let newTodos  = [...todoState]
    const a = new Promise((resolve, reject)=>{
      newTodos.forEach((todo,i) =>{
        if(todo.id === id){
          newTodos[i].done = s
          resolve(true)
        }
      })
    })
    
    a.then(res=>{
      if (res){
        setTodoState(newTodos)
        myStorage.setItem('todos', JSON.stringify(newTodos))
        todos = myStorage.getItem('todos')
      }
    })

  }

  if(todos){
    setTimeout(()=>{
      todos = myStorage.getItem('todos')
      JSON.parse(todos) !== todoState ? setTodoState(JSON.parse(todos)):
      console.log(JSON.parse(todos))
    }, 100)
  }
  
  return (
    <div className="App">
      <Header add={addHandler}/>
      <List todos={todoState} delete={delHandler} change={changeHandler}/>
      { todoState.length < 1 ? <h1 style={{color:'var(--c-dark)'}}>Todo List Is Empty, Add One!</h1> : null }
      
    </div>
  );
}

export default App;
