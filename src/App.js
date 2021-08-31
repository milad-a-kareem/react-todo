import './App.css';
import Header from './Header/Header';
import List from './List/List';

function App() {
  const todos = window.localStorage.getItem('todos')
  console.log(todos)
  return (
    <div className="App">
      <Header/>
      <List/>
      
    </div>
  );
}

export default App;
