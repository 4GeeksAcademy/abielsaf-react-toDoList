import React, { useState } from 'react'


function ToDoList () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}
  return (
    <div className='text-center'>
      <h1>To do List</h1>
      <br></br>
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button className="add-button" onClick={handleSubmit}>Add to do!</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button className="delete-button" onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p> Tasks left: {todos.length} </p>
    </div>
  )
}

export default ToDoList;

