//
function App(){
let data="Rishav";

function Apple()
{
    data="Raj"
    alert("Tasty Apple");
    alert(data);//here data updated from Rishav to Raj on button click
}
//click the button to call Apple() function then alert method execute.
//Arrow function can't called by itself. If here not use arrow func. then alert automatically called and also onClick event not work.
    return(
        <div>
        {/* here value of data(variable) is still Rishav thats why we use 'props' and 'state' */}
        <h4>{data}</h4>
      <button onClick={()=>Apple()}>Click me</button>
      </div>
      
     )
}

export default App;