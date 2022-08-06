function functionExample(param){
  return param;
}

function FunctionExample() {
  return (
    <div className>
      <h1>Hello {functionExample('React')}</h1>

      <label htmlFor="search"> Search </label>
      <input id="search" type="text"></input >
    </div>
  );
}

export default FunctionExample;