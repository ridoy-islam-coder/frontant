import React from 'react';
import Demo from './Demo';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to my React application!</p>


      <div>


        <h2>This is a Demo Component</h2>
         <Demo  />

         <h1>{5+5}</h1>
      </div>

    </div>
  );
};

export default App;