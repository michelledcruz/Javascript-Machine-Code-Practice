//How can you use the useState hook in React to manage the state of a text input field and display the entered text below the input field as the user types?
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <p>Enter text below</p>
      <FormInput/>
    </div>
  );
}

function FormInput() {
  const [searchText, setSearch ] = useState("React question");

  
  return (
    <>
      <input type="text" id="name" value={searchText} onChange={(e) => {
      setSearch(e.target.value);
      }}></input>
      <p>{searchText}</p>
    </>
  );
}

