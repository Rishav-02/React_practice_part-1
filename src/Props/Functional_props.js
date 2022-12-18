//props in Functional Component

function Student(props)
{
    console.log(props.name);
    return(
        <div style={{color:"green"}}>
            <p>Hello, {props.name}</p>
            <p style={{color:"orange"}}>Email: {props.email}</p>
        </div>
    )
}

export default Student;