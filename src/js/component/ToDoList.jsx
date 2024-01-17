import React, { useState } from 'react'


const ToDoList = () => {

  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setList([inputValue, ...list]);
      setInputValue('');
    } else {
      alert("This box can't be empty")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addItem();
    }
  }

  const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <div className="text-center">
      <h1> To do list!</h1>
      <input
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        onKeyDown={handleKeyDown}
        placeholder="Add tasks here"
      />
      <button className="add-button" onClick={addItem}>Add to do!</button>

      {list.length > 0 && (
        <ul>
          {list.map((el, i) => (
            <li key={i}>
              {el}
              <button className="delete-button" onClick={() => deleteItem(i)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      
      <p>{list.length === 0 ? "No tasks left, good job!" : list.length+[" Tasks left"]}</p>
    </div>
  );
};

export default ToDoList;

