import React from 'react';

const Demo = () => {

    const city = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];



    return (
        <div>
            <h2>This is a Demo Component</h2>
            <p>It serves as an example of a React functional component.</p>
            <input type="text" /> 
            <button>Click Me</button>

      <div>

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