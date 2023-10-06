const Counter = () => {
  const[count, setCount] = React.useState(0);


  return(
    <div>
      <p style={{fontsize: '50px', fontWeight:'bold'}}>{count}</p>
      <button onClick= {()=> setCount(count -1)}>-1</button>
      <button onClick= {()=> setCount(count +1)}>+1</button>
    </div>
  );
  };

  const MyApp = () =>{
    return(
      <div>
        <counter />
      </div>
    );
  };
  const myElement =<myApp/>;
  const myApp = myElement;

ReactDOM.render(<Counter />, document.getElementById("root"));
