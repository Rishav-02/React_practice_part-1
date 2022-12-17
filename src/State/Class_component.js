import React from "react";//here another way to import react

class Stateful extends React.Component {

    constructor()
    {
    //super() must be used inside constructor
        super();
        this.state={
            data:0
        }
    }
    Javascript()
    {
     this.setState({data:this.state.data+1});//update state
    }
    render()
    {
       return(
       <div>
        <p>{this.state.data}</p>
        <button onClick={()=> this.Javascript()}>Increase Number</button>
       </div>
       );
       
    }
}

export default Stateful;
