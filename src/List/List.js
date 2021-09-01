import './List.css';

function List(props) {
    const todoItems = props.todos.map(todo => 
        {
          let p = <p></p>
          if(todo.done){
            p = <p key={todo.id} style={{textDecorationLine: 'line-through'}}>{todo.text}</p>
          }else{
            p = <p key={todo.id} style={{textDecorationLine: 'none'}}>{todo.text}</p>
          }


          return (
            <li key={todo.id}>
              <input className='done' type='checkbox' defaultChecked={todo.done} onChange={()=>{props.change(todo.id)}}></input>
              
              {p}
              <div className='flex-grow'>
                  <button onClick={()=>{props.delete(todo.id)}}>Delete</button>
              </div>
            </li>
          )
        }
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