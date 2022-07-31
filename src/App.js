import './App.css';

function App() {
  return (
    <div className="App">
      <div><h1>Hello </h1>
        <div>
        <User name="Jean-Patrick" age="17" email="jp.admin@example.com" password="admin" />
        <Job title="Electrician" description="Create a new blog post"  progress="0" />
        </div>
        <div>
        <User name="René" age="45" email="rené@example.com" password="admin" />  
        <Job title="Farmer" description="Infinity of posts" progress="100" />   
        </div> 
      </div>
    </div>
  );
}

const age = 45;
// if (age >= 18) {
//   console.log('Is over age of 18 years');
// } else if (age >= 19) {
//   console.log('Is UNDER age of 18 years!');
// } Same as:
age >= 18 ? console.log('Is over age of 18 years') : console.log('Is UNDER age of 18 years!');

const User = (props) => {

  return (
    <div className="App">
      <h2>{props.name}</h2>
      <p>{props.email} </p>
      <p>{props.password} </p>
      <p>{props.age} </p>
    </div>
  );
}

const Job = (props) => {

  return (
    <div className="App">
      <h2>{props.title}</h2>
      <p>{props.description} </p>
      <p>{props.progress} </p>
    </div>
  );
}

export default App;
