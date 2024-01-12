import React, { useState } from 'react'

const Input = () => {

    const[inputValue,setInputValue] = useState('');
    const[list,Setlist] = useState([];)

    const validate = (value) => {
        if (value.trim() != '') {
            console.log("Valido y guardo")
            setInputValue = value
        } else {
            alert("El texto introducido no es válido")ñ
        }
    }

    const addItem = () => {
        list.unshift(inputValue);

        setlist(list);
        setInputValue('');
    }

    return (
        <div className='text-center'>
            <h1 className='text-center m5'> To Do List</h1>
            <input type='text' onChange={e => validate(e.target.value)} value={inputValue} />
            <button onClick={addItem}>Añadir</button>

        </div>
    )
}

export default Input