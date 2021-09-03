import React, { useState } from 'react'
import './Header.css';

function Header(props) {
  const [mobMenuState, mobMenuChangeState] = useState(false)

  const add = () => {
    const inp = document.querySelector('input')
    props.add(inp.value)
    inp.value = ''
  }

  const keyPress = e =>{
    if (e.key === 'Enter'){add()}
  }

  const openMenu = e => {
    mobMenuChangeState(true)

  }

  const closeMenu = e =>{
    mobMenuChangeState(false)
  }
  

  return (
    <div className="Header">
      <div className='Header-Logo'>
        <h1>MyToDo</h1>
      </div>
      <ul className={!mobMenuState ? 'Header-Buttons' : 'open'} onClick={closeMenu}>
        <li onClick={(e)=>{e.stopPropagation()}}>
            <input onClick={(e)=>{e.stopPropagation()}} defaultValue=''
             className='todo-text' type='text' placeholder='Todo text' onKeyPress={(e) => keyPress(e)}/>
        </li>
        <li onClick={(e)=>{e.stopPropagation(); add()}}>+ Add Todo</li>
      </ul>
      <img className='mobile-nav-icon' src='/images/list.png' alt='menu' onClick={openMenu}/>
    </div>
  );
}

export default Header;