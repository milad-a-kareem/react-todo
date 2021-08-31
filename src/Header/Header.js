import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className='Header-Logo'>
        <h1>MyToDo</h1>
      </div>
      <ul className='Header-Buttons'>
        <li>+ Add New Todo</li>
      </ul>
    </div>
  );
}

export default Header;