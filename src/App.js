import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello 
        <User name="admin" email="admin@example.com" password="admin" />
        <Job title="Electrician" description="Create a new blog post"  progress="0" />
        <User name="admin" email="admin@example.com" password="admin    password" />  
        <Job title="Farmer" description="Infinity of posts" progress="100" />  
      </h1>
    </div>
  );
}

const User = (props) => {

  return (
    <div className="App">
      <h1>{props.name}</h1>
      <div>{props.email} </div>
      <h2>{props.password} </h2>
    </div>
  );
}

const Job = (props) => {

  return (
    <div className="App">
      <span>{props.title}</span>
      <span>{props.description} </span>
      <span>{props.progress} </span>
    </div>
  );
}

export default App;
