import React from "react";

class UpdateProps extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:"Kashmir"
        }
    }
   render()
   {
    return(
       <div>
          <button onClick={()=>this.setState({name:"Hyderabad"})}>Update Props</button>
       </div>
    );
   }
}

export default UpdateProps;