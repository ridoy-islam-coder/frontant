import React, { useState } from 'react';

const Demo = () => {

    const city = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
    const [num,sernum]=useState(0);


    return (
        <div>
            <h2>This is a Demo Component</h2>
            <p>It serves as an example of a React functional component.</p>
            <input type="text" /> 
            <button>Click Me</button>

      <div>


    <div>
        <h3>Number List:</h3>

         <h1>number{num}</h1>
        <button onClick={()=>{sernum(num+1)}}>Increment</button>
        
        <button onClick={()=>{
            if(num>0){
                sernum(num-1)
            }}}>Decrement</button>







    </div>






        <h3>City List:</h3>
        <ul>
        {
           city.map((cityName, index) =>{
          return <li key={index}>{cityName}</li>
         }
            
           
        
        )

        }

        </ul>


      </div>

        </div>
    );
};

export default Demo;