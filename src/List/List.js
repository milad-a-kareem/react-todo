import './List.css';

function List(props) {
    const todoItems = props.todos.map(todo => 
        {
          let p = <p></p>
          if(todo.done){
            p = <p key={todo.id} style={{textDecorationLine: 'line-through', opacity:0.5, textAlign:'start'}}>{todo.text}</p>
          }else{
            p = <p key={todo.id} style={{textDecorationLine: 'none', textAlign:'start'}}>{todo.text}</p>
          }


          return (
            <li key={todo.id}>
              <input className='done' type='checkbox' defaultChecked={todo.done} onChange={(e)=>{props.change(todo.id,e.target.checked)}}></input>
              
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