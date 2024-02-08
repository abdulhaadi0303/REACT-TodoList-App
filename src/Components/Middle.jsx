import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Heading";
import defaultlists from "./ARRAY";

function Middle() {

  function deleteTask(id) {
    setLists((prevLists) => {
      return prevLists.filter((list) => list.id !== id);
    });
  }
  

  const [lists, setLists] = useState(defaultlists); 
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick() {
    const newItem = { id: lists.length, name: inputValue }
    setLists(prevList => [...prevList, newItem]);
    setInputValue(''); // Clear the input field after adding the item
  }

  
  function CreateList(list) {
    return (
      <li key={list.id}>
        <input
          type='checkbox'
          className='checkbox'
          onChange={() => deleteTask(list.id)} // Use the id for deletion
        />
        {list.name}
      </li>
    );
  }
  



  
  
    return (
      <div className='Taskbar'>

      <Heading/>

    <ul>
    {lists.map((list) => CreateList(list))}

    </ul>
        <input 
        type="text"
        placeholder="Add Item here" 
        className="input-style" 
        value={inputValue}
        onChange={handleInputChange} />

        <button 
        className="button-style" 
        onClick={handleClick}
        >+</button>
     
    
      </div>
    );
  }
    
    export default Middle;

