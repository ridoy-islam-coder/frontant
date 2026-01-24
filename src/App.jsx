import React, { useRef } from 'react';
import Demo from './Demo';

const App = () => {
   
  let fname=useRef(null);
  let lname=useRef(null);
 

  let handleClick=()=>{
    console.log(fname.current.value);
    console.log(lname.current.value);

   let firstName=fname.current.value;
   let lastName=lname.current.value;

   alert(`Hello ${firstName} ${lastName}`)

  }

  return (
    <div>
         
          <div>
        <h1>Hello World!</h1>

        <input type="text"  ref={fname}/> <br />
        <input type="text"   ref={lname}/><br />
         

         <button onClick={handleClick}>clickhear</button>




        <h2>This is a Demo Component</h2>
         <Demo  />

         <h1>{5+5}</h1>
      </div>

    </div>
  );
};

export default App;