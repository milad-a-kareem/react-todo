import './List.css';

function List() {
  return (
    <div >
      <ul className="List">
        <li>
            <input type='checkbox'></input>
            <p>Cleanning the room</p>
        </li>
        <li>
            <input type='checkbox'></input>
            <p>Go to school</p>
        </li>
      </ul>
    </div>
  );
}

export default List;