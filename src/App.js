import './App.css';

function App() {
  return (
    <div className="App">
      <div><h1>Hello </h1>
        <div>
        <User name="Jean-Patrick" email="jp.admin@example.com" password="admin" />
        <Job title="Electrician" description="Create a new blog post"  progress="0" />
        </div>
        <div>
        <User name="René" email="rené@example.com" password="admin" />  
        <Job title="Farmer" description="Infinity of posts" progress="100" />   
        </div> 
      </div>
    </div>
  );
}

const User = (props) => {

  return (
    <div className="App">
      <h2>{props.name}</h2>
      <p>{props.email} </p>
      <p>{props.password} </p>
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
