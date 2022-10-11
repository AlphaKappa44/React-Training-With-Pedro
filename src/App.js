import './App.css';

function App() {
  // Change the age and see:
  const age = 19;
  // const age = 17;
  let isGreen = true;
// IF ELSE statements:
  //     if (age >= 18) {
  // console.log('Is over age of 18 years')
  // return <h1>Is over age of 18 years</h1>
  //   } else if (age <= 19) {
  // console.log('Is UNDER age of 18 years!')
  // return <h1>Is UNDER age of 18 years</h1>
  return ( 
    <div className='App'>
      {/* If statement on logic */}
      {age >= 18 ? <p>Is OVER age of 18 years </p> : <p>Is UNDER age of 18 years</p> }
      {age >= 18 ? isGreen=true : isGreen = false}

      {/* Ternary operator on CSS => if true then green else red */}
      <h1 style={{color: isGreen? "green" : "red"}}>COLOR</h1>

      {/* If True, render a tag (button) */}
      {isGreen 
      &&  <button> Color isGreen!</button>}
          {isGreen 
      && <p>You are aloud to click on the button</p> 
      }

    </div>
  );
}








export default App;
