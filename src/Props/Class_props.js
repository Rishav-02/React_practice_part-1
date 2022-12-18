import React from "react";

export default class Properties extends React.Component{

    render()
    {
       console.log(this.props);//console inside function in class component
       return(
       <div>
          <p>Hii,{this.props.name}</p>
          <p>mobile_no : {this.props.mobile_no}</p>
       </div>
       )
    }
}
