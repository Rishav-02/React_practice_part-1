//Use of State with Functional Componets

//'State' generally refers to data or properties that need to be tracking in an application.

//The React useState Hook allows us to track 'State' in a function component.

//The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

/* useState accepts an initial state and returns two values:

1. The current state.
2. A function that updates the state. */


import {useState} from "react";

//Here data is current state and setData is the function that is used to update our state.
function State(){
const [data,setData] = useState("Alok");

function UpdateData()
{
  setData("Rishav");
  alert(data);//Click OK then data are updated from Alok to Rishav.
}
console.warn("Rerendered");

    return(
        <div>
        {/* Here data is updated */}
        <h4>{data}</h4>
        {/* Here we also use arrow function */}
        <button onClick={ UpdateData }>Update Data</button>
        </div>
    );
}

export default State;