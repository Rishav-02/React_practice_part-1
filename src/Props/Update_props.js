import React,{useState} from "react";

function Props(){
    const[month,setMonth]=useState("August");
    return(
        <div>
        <h4>{month}</h4>
            <button onClick={()=>{setMonth("October")}}>Update Month</button>
        </div>
    );
}

export default Props