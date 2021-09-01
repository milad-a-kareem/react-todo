import './Header.css';

function Header(props) {
  let text = ''
  const handleChange = (event) => {
    text = event.target.value
    console.log(text)
  }
  return (
    <div className="Header">
      <div className='Header-Logo'>
        <h1>MyToDo</h1>
      </div>
      <ul className='Header-Buttons'>
        <li>
            <input defaultValue=''
             className='todo-text' type='text' placeholder='Todo text' onChange={handleChange}/>
        </li>
        <li onClick={()=>{props.add(text)}}>+ Add Todo</li>
      </ul>
    </div>
  );
}

export default Header;