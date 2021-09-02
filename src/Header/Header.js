import './Header.css';

function Header(props) {
  let text = ''
  const handleChange = (event) => {
    text = event.target.value 
  }

  const add = () => {
    props.add(text)
    document.querySelector('input').value = ''
  }

  const keyPress = e =>{
    if (e.key === 'Enter'){add()}
  }

  const openMenu = e => {
    const headerButtons = document.querySelector('ul')
    // headerButtons.classList.remove('Header-Buttons')
    headerButtons.classList.add('open')

  }

  const closeMenu = e =>{
    const headerButtons = document.querySelector('ul')
    headerButtons.classList.add('Header-Buttons')
    headerButtons.classList.remove('open')
  }
  

  return (
    <div className="Header">
      <div className='Header-Logo'>
        <h1>MyToDo</h1>
      </div>
      <ul className='Header-Buttons' onClick={closeMenu}>
        <li onClick={(e)=>{e.stopPropagation()}}>
            <input onClick={(e)=>{e.stopPropagation()}} defaultValue=''
             className='todo-text' type='text' placeholder='Todo text' onChange={handleChange} onKeyPress={(e) => keyPress(e)}/>
        </li>
        <li onClick={(e)=>{e.stopPropagation(); add()}}>+ Add Todo</li>
      </ul>
      <img className='mobile-nav-icon' src='/images/list.png' alt='menu' onClick={openMenu}/>
    </div>
  );
}

export default Header;