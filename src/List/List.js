import './List.css';

function List(props) {
    console.log(props)
    const todoItems = props.todos.map(todo => 
        <li key={todo.id}>
            <input className='done' type='checkbox' defaultChecked={todo.done} onChange={console.log('changed')}></input>
            <p>{todo.text}</p>
            <div className='flex-grow'>
                <button onClick={()=>{props.delete(todo.id)}}>Delete</button>
            </div>
        </li>
    )
  return (
    <div >
      <ul className="List">
         {todoItems}
      </ul>
    </div>
  );
}

export default List;