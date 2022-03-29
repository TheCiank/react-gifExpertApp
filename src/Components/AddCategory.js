import React, {useState} from 'react';
import { PropTypes } from "prop-types";


export const AddCategory = ({setCategory}) => {
  const  [inputValue, setInputValue] = useState('');

  const handleInputChange =(e) => {
    setInputValue(e.target.value);
  }

  const handleSumbit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length < 2)
    {
      alert('Esta intentando poner un valor vacio.');
      return;
    }
    
    setCategory(cats => [inputValue, ...cats]);
      setInputValue('');

  }

  return(
    <form onSubmit={handleSumbit}>
       <h1>{inputValue}</h1>
       <input
           type="text"
           value={inputValue}
          onChange={handleInputChange}/>
    </form>
  );
}



AddCategory.propTypes = {
  setCategory : PropTypes.func.isRequired
}