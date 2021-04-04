import React, { useState } from 'react';
import './styles.css'

export default function InputField() {
   const [inputValue, setInputValue] = useState('');
  return (
    <>
      <form action="#" method="GET" class="search-form">
        <label for="search" class="screen-reader-text">
          Write something
        </label>
        <input
          id="search"
          type="search"
          class="search-input"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter search terms..."
        />
        <button onClick={() => alert('The alert value is : '+inputValue)} class="submit-button">Submit</button>
      </form>
    </>
  );
}
