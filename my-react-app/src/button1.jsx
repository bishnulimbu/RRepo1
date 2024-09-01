function Button() {
  const runFn = (name) => console.log(`${name} is bad.`);
  let count = 0;
  const countClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`bro you clicked me ${count}`);
    } else {
      console.log("you are clicking too much");
    }
  };
  return (
    <>
      {/* <button onClick={console.log("you clicked me.")}>Click Me! </button> */}
      <button onClick={() => runFn("ram")}>clikce</button>
      {/* if need to pass parameter and () is present it needs to be wrapped around with function expression i.e. an arrowfunciton or some sort   */}
      <hr />
      <button
        onClick={() => {
          countClick("bro");
        }}
      >
        Clike Me!
      </button>
    </>
  );
}

export default Button;
